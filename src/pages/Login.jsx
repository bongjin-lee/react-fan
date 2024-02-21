import React, { useState } from "react";
import Button from "components/common/Button";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { login } from "redux/modules/authSlice";

export default function Login() {
  const dispatch = useDispatch();
  const [isLoginMode, setIsLoginMode] = useState(false);
  const initaliState = {
    id: "",
    password: "",
    nickname: "",
  };
  const [formState, setFormState] = useState(initaliState)
  const { id, password, nickname } = formState;
  // console.log("id", id);
  // console.log("password", password);
  // console.log("nickname", nickname);
  const onChageHandelr = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefalut();
    if (isLoginMode) {
      // 로그인처리
      dispatch(login());
      alert("로그인 성공");
    } else {
      // 회원가입
      setIsLoginMode(true);
      setFormState(initaliState);
      alert("회원가입 성공");
    }
  };

  return (
    <Container>
      <Form onSubmit={onSubmitHandler}>
        <Title>{isLoginMode ? "로그인" : "회원가입"}</Title>
        <Input
          name="id"
          onChange={onChageHandelr}
          value={id}
          placeholder="아이디 (4~10글자)"
          minLength={4}
          maxLength={10}
        />
        <Input
          name="password"
          onChange={onChageHandelr}
          value={password}
          placeholder="비밀번호 (4~15글자)"
          minLength={4}
          maxLength={15}
        />
        {!isLoginMode && (
          <Input
            name="nickname"
            value={nickname}
            onChange={onChageHandelr}
            placeholder="닉네임 (1~10글자)"
            minLength={1}
            maxLength={10}
          />
        )}
        <Button
          disabled={
            isLoginMode ? !id || !password : !id || !password || !nickname
          }
          text={isLoginMode ? "로그인" : "회원가입"}
          size="large"
        />
        <ToggleText>
          <span onClick={() => setIsLoginMode((prev) => !prev)}>
            {isLoginMode ? "회원가입" : "로그인"}
          </span>
        </ToggleText>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  background-color: lightgray;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  background-color: white;
  width: 500px;
  border-radius: 12px;
  padding: 12px;
  font-size: 16px;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 24px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid gray;
  width: 100%;
  display: block;
  margin-bottom: 16px;
  padding: 12px 0;
  outline: none;
`;

const ToggleText = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 24px;
  & span {
    color: lightgray;
    user-select: none;
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
`;
