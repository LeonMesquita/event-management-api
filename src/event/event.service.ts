import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { searchCEP } from 'src/utils/search-address.util';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Address } from './entities/address.entity';
import { Event } from './entities/event.entity';

@Injectable()
export class EventService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createEventDto: CreateEventDto, user_id: number) {
    let address: Address;
    const eventExists = await this.findOneByEmail(createEventDto.email);
    if (eventExists) throw new ConflictException('This email already exists');

    const foundAddress: Address = await this.searchAddress(
      createEventDto.zip_code,
    );
    address = await this.findAddress(foundAddress.zip_code);
    if (!address) {
      address = await this.createAddress(foundAddress);
    }
    const { zip_code, ...eventBody } = createEventDto;
    const data: Event = {
      ...eventBody,
      user_id,
      address_id: address.id,
    };

    const createdEvent = await this.prisma.event.create({ data });

    return createdEvent;
  }

  async findAll(): Promise<Event[]> {
    return await this.prisma.event.findMany();
  }

  async findOne(id: number): Promise<Event> {
    const event = await this.prisma.event.findUnique({ where: { id } });
    if (!event)
      throw new NotFoundException(`The event with id ${id} was not found`);
    return event;
  }

  async findOneByEmail(email: string) {
    return await this.prisma.event.findUnique({ where: { email } });
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return `This action updates a #${id} event`;
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }

  private async createAddress(data: Address): Promise<Address> {
    return await this.prisma.address.create({ data });
  }

  private async findAddress(zip_code: string): Promise<Address> {
    return await this.prisma.address.findUnique({ where: { zip_code } });
  }

  async searchAddress(zip_code: string) {
    const address = await searchCEP(zip_code);

    return address;
  }
}
