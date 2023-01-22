import { NotFoundException } from '@nestjs/common';
import axios from 'axios';
import { Address } from 'src/event/entities/address.entity';
export async function searchCEP(cep: string): Promise<Address> {
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  try {
    const res = await axios.get(url);
    const apiResponse: AddressInterface = res.data;
    const address: Address = {
      zip_code: apiResponse.cep.replace('-', ''),
      street: apiResponse.logradouro,
      district: apiResponse.bairro,
      complement: apiResponse.complemento,
      city: apiResponse.localidade,
      state: apiResponse.uf,
    };
    return address;
  } catch (err) {
    throw new NotFoundException(`Incorrect or inexisting postal code`);
  }
}

interface AddressInterface {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}
