import { Args, Query, Resolver } from "@nestjs/graphql";
import { Sample } from "./entities/sample.entity";

// @Resolver만 붙이면 graphql로부터 import 된다.
@Resolver(of => Sample)  // sample.entity 파일에서 불러옴
export class SampleResolver {
    
    // testParamName이라는 파라미터를 받는 경우
    @Query(returns => [Sample])
    samples(@Args('testParamName') testParamName: boolean): Sample[] {
        return [];
    }
}

/* 
// 사용법
query {
    samples(testParamName: true) {
        name
    }
}
*/