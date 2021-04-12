import { CarWashTypes } from "../types/CarWash";

const carWashTypes: CarWashTypes = {
  autospa: { alias: "autospa", id: 2 },
  touchless: { alias: "myjniebezdotykowe", id: 1 },
};

export const getCarWashTypeIdByAlias = (alias: string): number => {
  const carWashType: string[] = Object.keys(carWashTypes).filter(
    (key) => carWashTypes[key].alias === alias
  );
  const carWashId: number = carWashTypes[carWashType[0]].id;

  return carWashId;
};

export const getCarWashTypeAliasById = (id: number): string => {
  const carWashType: string[] = Object.keys(carWashTypes).filter(
    (key) => carWashTypes[key].id === id
  );
  const carWashAlias: string = carWashTypes[carWashType[0]].alias;

  return carWashAlias;
};

export default carWashTypes;
