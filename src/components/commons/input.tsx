import clsx from "clsx";
import { Path, RegisterOptions, UseFormRegister } from "react-hook-form";

// 폼데이터 인터페이스 정의
interface FormValues {
    userId: string;
    password: string;
}

type InputProps<TFieldValues extends FormValues> = {
    name: Path<TFieldValues>; // name은 path 유틸리티 타입을 사용하여 경로 문자열을 타입화
    type?: "text" | "password"; // 입력 필드 타입, 기본값 text
    placeholder?: string;
    validation?: RegisterOptions;
    className?: string;
    register: UseFormRegister<TFieldValues>;
};

/**
 * 공용 컴포넌트
 * author: Gang
 */

const Input = <TFieldValues extends FormValues>({
    name,
    type = "text",
    placeholder,
    className,
    register,
}: InputProps<TFieldValues>): JSX.Element => {
    return (
        <input
            {...register(name)}
            type={type}
            placeholder={placeholder}
            className={clsx("border-2 p-2 rounded-md shadow-sm ", className)}
        />
    );
};

export default Input;