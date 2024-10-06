import {
  TextField,
  TextFieldDescription,
  TextFieldLabel,
  TextFieldRoot,
} from "../component/base/TextField";
import { Button } from "../component/Button";
import { LogoLayout } from "../layout/LogoLayout";

export const SignUp = () => {
  return (
    <LogoLayout>
      <div class="p-20">
        <div class="mt-10">
          <TextFieldRoot class="w-full max-w-xs">
            <TextFieldLabel>이름</TextFieldLabel>
            <TextField />
            <TextFieldDescription>이름을 입력해주세요</TextFieldDescription>
          </TextFieldRoot>
        </div>
        <div class="mt-8">
          <Button>가입하기</Button>
        </div>
      </div>
    </LogoLayout>
  );
};