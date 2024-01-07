import Link from "next/link";

export default function ButtonLine() {
  return (
    <Link
      href="/"
      className="flex h-[50px] w-full max-w-[200px] items-center justify-center gap-[5px] rounded-[50px] bg-[#01B202] text-[14px] font-medium text-white duration-150 hover:opacity-75 md:h-[64px] md:max-w-[250px] md:text-[16px]"
    >
      <svg
        className="h-4 w-4 md:h-6 md:w-6"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.3125 9.66016V13.2656C14.3125 13.3672 14.2109 13.418 14.1094 13.418H13.5508C13.5 13.418 13.4492 13.3672 13.3984 13.3672L11.7734 11.1328V13.2656C11.7734 13.3672 11.6719 13.418 11.6211 13.418H11.0117C10.9102 13.418 10.8594 13.3672 10.8594 13.2656V9.66016C10.8594 9.55859 10.9102 9.50781 11.0117 9.50781H11.6211C11.6719 9.50781 11.7227 9.50781 11.7227 9.55859L13.3984 11.793V9.66016C13.3984 9.55859 13.4492 9.50781 13.5508 9.50781H14.1094C14.2109 9.45703 14.3125 9.55859 14.3125 9.66016ZM10.1484 9.45703C10.1992 9.45703 10.3008 9.55859 10.3008 9.66016V13.2656C10.3008 13.3672 10.1992 13.418 10.1484 13.418H9.53906C9.4375 13.418 9.38672 13.3672 9.38672 13.2656V9.66016C9.38672 9.55859 9.4375 9.45703 9.53906 9.45703H10.1484ZM8.72656 12.5039C8.82812 12.5039 8.87891 12.6055 8.87891 12.6562V13.2656C8.87891 13.3164 8.82812 13.418 8.72656 13.418H6.39062C6.33984 13.418 6.33984 13.3672 6.28906 13.3672C6.28906 13.3164 6.23828 13.3164 6.23828 13.2656V9.66016C6.23828 9.55859 6.33984 9.45703 6.39062 9.45703H7C7.10156 9.45703 7.15234 9.55859 7.15234 9.66016V12.5039H8.72656ZM17.3594 9.45703C17.4102 9.45703 17.5117 9.55859 17.5117 9.66016V10.2188C17.5117 10.3203 17.4102 10.3711 17.3594 10.3711H15.7852V10.9805H17.3594C17.4102 10.9805 17.5117 11.082 17.5117 11.1328V11.7422C17.5117 11.8438 17.4102 11.8945 17.3594 11.8945H15.7852V12.5039H17.3594C17.4102 12.5039 17.5117 12.6055 17.5117 12.6562V13.2656C17.5117 13.3672 17.4102 13.418 17.3594 13.418H15.0234C14.9219 13.418 14.8711 13.3164 14.8711 13.2656V9.66016C14.8711 9.55859 14.9219 9.45703 15.0234 9.45703H17.3594ZM23.25 5.03906V19.5117C23.1992 21.7969 21.3711 23.6758 19.0859 23.625H4.61328C2.32812 23.625 0.449219 21.7969 0.5 19.5117V4.98828C0.5 2.75391 2.32812 0.875 4.61328 0.875H19.1367C21.3711 0.925781 23.25 2.75391 23.25 5.03906ZM20.1016 11.2852C20.1016 7.57812 16.3945 4.53125 11.8242 4.53125C7.25391 4.53125 3.54688 7.57812 3.54688 11.2852C3.54688 14.5859 6.49219 17.3789 10.4531 17.8867C11.418 18.0898 11.3164 18.4453 11.1133 19.7656C11.0625 19.9688 10.9102 20.5781 11.8242 20.2227C12.6875 19.8672 16.5977 17.4297 18.3242 15.3984C19.543 14.0781 20.1016 12.7578 20.1016 11.2852Z"
          fill="white"
        />
      </svg>
      <span>LINEでお申込み</span>
    </Link>
  );
}
