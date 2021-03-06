import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateSampleDto } from "./dtos/create-sample-dto";
import { UpdateSampleDto } from "./dtos/update-sample.dto";
import { Sample } from "./entities/sample.entity";
import { SampleService } from "./sample.service";

// @Resolver만 붙이면 graphql로부터 import 된다.
@Resolver(of => Sample)  // sample.entity 파일에서 불러옴
export class SampleResolver {
    constructor(private readonly sampleService: SampleService) {

    }

    // testParamName이라는 파라미터를 받는 경우
    @Query(returns => [Sample])
    samples(): Promise<Sample[]> {
        return this.sampleService.getAll();
    }

    // 인자들 일일히 넣어주는게 아니라 dto 파일 만들어서 넣어줌
    @Mutation(returns => Boolean)
    async createSample(@Args('input') CreateSampleDto: CreateSampleDto): Promise<boolean> {
        try {
            await this.sampleService.createSample(CreateSampleDto);
            return true;
        } catch(e) {
            console.log(e);
            return false;
        }
    }

    @Mutation(returns => Boolean)
    async updateSample(
        // @Args('id') id: number,
        // @Args('data') data: UpdateSampleDto,
        @Args('input') updateSampleDto: UpdateSampleDto
    ): Promise<boolean> {
        try {
            await this.sampleService.updateSample(updateSampleDto);
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }
}

/* 
// 사용법
query {
    samples {
        id
    }
}

mutation {
  createSample(
  name: "12345"
  isVegan: true
  address: "1"
  ownersName: "1"
  categoryName: "1"
  )
}

mutation {
  updateSample(input: {
    id: 4,
    data: {
      name: "updated!!"
      isVegan: false
    }
  })
}
*/