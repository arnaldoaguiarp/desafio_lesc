import {MigrationInterface, QueryRunner} from "typeorm";

export default class RelationTaskUser1619384524516 implements MigrationInterface {
    name = 'RelationTaskUser1619384524516'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" DROP CONSTRAINT "FK_fbb3afda49e890f113b3fa019c0"`);
        await queryRunner.query(`ALTER TABLE "task_entity" DROP CONSTRAINT "FK_15165a7f55aab607e3a01fbb18f"`);
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "taskEntityId"`);
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "task_entity" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "task_entity" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "task_entity" DROP COLUMN "userEntityId"`);
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "task_entity" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "task_entity" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "task_entity" ADD "userEntityId" integer`);
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "taskEntityId" integer`);
        await queryRunner.query(`ALTER TABLE "task_entity" ADD CONSTRAINT "FK_15165a7f55aab607e3a01fbb18f" FOREIGN KEY ("userEntityId") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_entity" ADD CONSTRAINT "FK_fbb3afda49e890f113b3fa019c0" FOREIGN KEY ("taskEntityId") REFERENCES "task_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" DROP CONSTRAINT "FK_fbb3afda49e890f113b3fa019c0"`);
        await queryRunner.query(`ALTER TABLE "task_entity" DROP CONSTRAINT "FK_15165a7f55aab607e3a01fbb18f"`);
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "taskEntityId"`);
        await queryRunner.query(`ALTER TABLE "task_entity" DROP COLUMN "userEntityId"`);
        await queryRunner.query(`ALTER TABLE "task_entity" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "task_entity" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "task_entity" ADD "userEntityId" integer`);
        await queryRunner.query(`ALTER TABLE "task_entity" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "task_entity" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "taskEntityId" integer`);
        await queryRunner.query(`ALTER TABLE "task_entity" ADD CONSTRAINT "FK_15165a7f55aab607e3a01fbb18f" FOREIGN KEY ("userEntityId") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_entity" ADD CONSTRAINT "FK_fbb3afda49e890f113b3fa019c0" FOREIGN KEY ("taskEntityId") REFERENCES "task_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
