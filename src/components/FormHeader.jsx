export default function FormHeader({ title, subTitle, ...props }) {
  return (
    <div className="flex flex-col justify-center w-full">
      <div className="flex items-start max-w-[188px]">
        <img src="/images/logo.png" alt="logo" />
      </div>

      <h1 className="heading-2 text-capitalize">{title}</h1>

      <p className="body-8 text-secondary-dark">
        {subTitle.split("\n").map((line, idx) => (
          <span key={idx}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
}
