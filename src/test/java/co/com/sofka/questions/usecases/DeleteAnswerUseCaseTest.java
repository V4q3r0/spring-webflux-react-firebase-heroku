package co.com.sofka.questions.usecases;

import co.com.sofka.questions.reposioties.QuestionRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import reactor.core.publisher.Mono;
import reactor.test.StepVerifier;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class DeleteAnswerUseCaseTest {

    @MockBean
    private QuestionRepository questionRepository;

    @Autowired
    private DeleteAnswerUseCase deleteAnswerUseCase;

    @Test
    @DisplayName("DeleteAnswer Test")
    void DeleteAnswer(){
        Mockito.when(questionRepository.deleteById("01")).thenReturn(Mono.empty());

        var resultado = deleteAnswerUseCase.apply("01");

        Assertions.assertEquals(null, resultado.block());
    }

}