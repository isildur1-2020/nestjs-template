import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class JobOffer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  chargeTitle: string;

  @Column()
  modality: number;

  @Column()
  typeOfContract: number;

  @Column()
  country: number;

  @Column()
  city: number;

  @Column({ type: 'text' })
  shortDescription: string;

  @Column({ type: 'text' })
  requiredProfile: string;

  @Column({ type: 'text' })
  chargeRequirements: string;

  @Column({ type: 'text' })
  responsibilities: string;

  @Column({ type: 'date' })
  closeDate: Date;

  @Column()
  company: number;

  @Column({ type: 'text' })
  offerLink: string;
}
