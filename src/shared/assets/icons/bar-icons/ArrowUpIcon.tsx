const ArrowUpIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="10"
      height="6"
      viewBox="0 0 10 6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.35355 5.34033C9.15829 5.55322 8.84171 5.55322 8.64645 5.34033L5.35355 1.75C5.15829 1.5371 4.84171 1.5371 4.64645 1.75L1.35355 5.34032C1.15829 5.55322 0.841709 5.55322 0.646446 5.34032C0.451184 5.12742 0.451184 4.78225 0.646446 4.56935L3.93934 0.979022C4.52513 0.340325 5.47487 0.340324 6.06066 0.979022L9.35355 4.56935C9.54882 4.78225 9.54882 5.12743 9.35355 5.34033Z"
        fill="#5E788F"
      />
    </svg>
  );
};

export default ArrowUpIcon;
