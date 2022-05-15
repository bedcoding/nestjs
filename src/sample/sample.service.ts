import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateSampleDto } from "./dtos/create-sample-dto";
import { UpdateSampleDto } from "./dtos/update-sample.dto";
import { Sample } from "./entities/sample.entity";
import { getManager } from 'typeorm';

@Injectable()
export class SampleService {
    constructor(
        @InjectRepository(Sample)
        private readonly sample: Repository<Sample>,
    ) {
        
    }

    getAll(): Promise<Sample[]> {
        return this.sample.find()
    }

    createSample(createSampleDto: CreateSampleDto): Promise<Sample> {
        const newSample = this.sample.create(createSampleDto);
        return this.sample.save(newSample);
    }

    updateSample({ id, data }: UpdateSampleDto) {
        // 1. 순수 typeorm을 쓰는 경우
        // this.sample.update(id, { ...data });  // {}에 update 하고 싶은 내용 넣기

        // 2. 만약 rawQuery를 날려야 하는 경우
        const { name, isVegan, address } = data
        const entityManager = getManager();
        entityManager.query(`
            UPDATE sample 
            SET name='${name}', "isVegan"=${isVegan}, address='${address}'
            WHERE id = ${id};
        `);
    }
}


// 사용 예시 //

// mutation {
// updateSample(input: {
//     id: 1,
//     data: {
//             name: "updated~!"
//             isVegan: false
//             address: "change..."
//         }
//     })
// }