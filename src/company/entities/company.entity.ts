import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column('text', {
    nullable: false,
  })
  public description: string;

  @Column('int', {
    nullable: false,
  })
  public country: number;

  @Column('int', {
    nullable: false,
  })
  public city: number;

  @Column('int', {
    nullable: false,
  })
  public sector: number;

  @Column('varchar', {
    nullable: false,
  })
  public logo_url: string;
}
