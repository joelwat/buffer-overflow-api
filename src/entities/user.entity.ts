import { Table, Column } from 'formn';

@Table({name: 'users'})
export class User {
  @Column({hasDefault: true, isNullable: false, sqlDataType: 'datetime'})
  createdOn!: Date;

  @Column({isNullable: false, maxLength: 255, sqlDataType: 'varchar'})
  email!: string;

  @Column({maxLength: 100, sqlDataType: 'varchar'})
  firstName?: string;

  @Column({isPrimary: true, isGenerated: true, isNullable: false, sqlDataType: 'int'})
  id!: number;

  @Column({sqlDataType: 'datetime'})
  lastLogin?: Date;

  @Column({maxLength: 100, sqlDataType: 'varchar'})
  lastName?: string;

  @Column({maxLength: 255, sqlDataType: 'varchar'})
  password!: string;

  @Column({sqlDataType: 'datetime'})
  resetExpires?: Date;

  @Column({maxLength: 255, sqlDataType: 'varchar'})
  resetToken?: string;

  @Column({hasDefault: true, isNullable: false, sqlDataType: 'datetime'})
  updatedOn!: Date;
}
