import { ICreateSpecificationDto } from "./SpecificationDto";

export default interface ICarDto {
    id?: string;
    name: string;
    description: string;
    daily_rate: number;
    license_plate: string;
    fine_amount: number;
    brand: string;
    category_id: string;
    avaible?: boolean;
    created_at?: Date;
    specifications?: ICreateSpecificationDto[];
}
