export const Footer = (year, fullName, studentId) => {
  return (
    <div className="mt-3">
      <p className="text-secondary text-center">
        copyright © {year} {fullName} {studentId}
      </p>
    </div>
  );
};
