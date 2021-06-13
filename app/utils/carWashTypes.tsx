import { CarWashTypes } from "../types/CarWash";

const carWashTypes: CarWashTypes = {
  autodetailing: { alias: "autodetailing", id: 2 },
  touchless: { alias: "myjniebezdotykowe", id: 1 },
};

export const getCarWashTypeIdByAlias = (alias: string): number => {
  let carWashId: number | undefined;
  const carWashType: string[] = Object.keys(carWashTypes).filter(
    (key) => carWashTypes[key].alias === alias
  );
  if (carWashTypes[carWashType[0]]) {
    carWashId = carWashTypes[carWashType[0]].id;
  }

  return carWashId;
};

export const getCarWashTypeAliasById = (id: number): string => {
  let carWashAlias: string | undefined;
  const carWashType: string[] = Object.keys(carWashTypes).filter(
    (key) => carWashTypes[key].id === id
  );
  if (carWashTypes[carWashType[0]]) {
    carWashAlias = carWashTypes[carWashType[0]].alias;
  }

  return carWashAlias;
};

export default carWashTypes;
