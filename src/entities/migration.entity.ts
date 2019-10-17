import { Table, Column } from 'formn';

@Table({name: 'migrations'})
export class Migration {
  @Column({ isPrimary: true, isGenerated: true, isNullable: false, sqlDataType: 'int' })
  id!: number;

  @Column({isNullable: false, maxLength: 255, sqlDataType: 'varchar'})
  name!: string;

  @Column({name: 'run_on', isNullable: false, sqlDataType: 'datetime'})
  runOn!: Date;
}
