package codestates.preproject.stackoverflow.toapi;

import codestates.preproject.stackoverflow.member.controller.MemberController;
import codestates.preproject.stackoverflow.member.dto.MemberDto;
import com.google.gson.Gson;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.http.MediaType;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static codestates.preproject.stackoverflow.util.ApiDocument.getRequestPreProcessor;
import static codestates.preproject.stackoverflow.util.ApiDocument.getResponsePreProcessor;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.post;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(MemberController.class)
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
public class MemberControllerDocs {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private Gson gson;

    @Test
    public void postMemberTest() throws Exception{
        MemberDto.Post post = new MemberDto.Post("김코딩","12345asdfg","fefwef@naver.com");
        String content = gson.toJson(post);

        Map<String, String> map = new HashMap<>();
        map.put("result","회원가입완료");

        ResultActions actions =
                mockMvc.perform(
                    post("/v1/members")
                            .accept(MediaType.APPLICATION_JSON)
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(content)
                );

        actions
                .andExpect(status().isCreated())
                .andDo(document("post-member",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        requestFields(
                                List.of(
                                        fieldWithPath("nickName").type(JsonFieldType.STRING).description("닉네임"),
                                        fieldWithPath("password").type(JsonFieldType.STRING).description("비밀번호"),
                                        fieldWithPath("email").type(JsonFieldType.STRING).description("이메일")
                                )
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("result").type(JsonFieldType.STRING).description("확인완료")
                                )
                        )
                ));
    }
}
