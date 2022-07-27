import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1658905373536 implements MigrationInterface {
    name = 'Init1658905373536'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`todo\` (\`id\` int NOT NULL AUTO_INCREMENT, \`subject\` varchar(255) NOT NULL DEFAULT '', \`doneAt\` datetime NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`todo\``);
    }

}
