import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Account {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;
}