import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, default: "" })
  subject: string;

  @Column({ nullable: true })
  doneAt: Date | null;

  isDone(): boolean {
    return !!this.doneAt;
  }

  done() {
    this.doneAt = new Date();
  }

  static load(data: any): Todo {
    throw new Error("");
  }
}
