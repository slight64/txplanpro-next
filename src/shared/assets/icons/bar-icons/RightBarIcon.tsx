const RightBarIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 3.5H13.5V12.5H2.5L2.5 3.5ZM1.5 3.5C1.5 2.94771 1.94772 2.5 2.5 2.5H13.5C14.0523 2.5 14.5 2.94772 14.5 3.5V12.5C14.5 13.0523 14.0523 13.5 13.5 13.5H2.5C1.94772 13.5 1.5 13.0523 1.5 12.5V3.5ZM10.5 4.5C9.94772 4.5 9.5 4.94772 9.5 5.5V10.5C9.5 11.0523 9.94771 11.5 10.5 11.5H11.5C12.0523 11.5 12.5 11.0523 12.5 10.5V5.5C12.5 4.94772 12.0523 4.5 11.5 4.5H10.5Z"
        fill="#5E788F"
      />
    </svg>
  );
};

export default RightBarIcon;
