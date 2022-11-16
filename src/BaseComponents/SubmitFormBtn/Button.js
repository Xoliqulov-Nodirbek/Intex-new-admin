import "./Button.css";

function SubmitBtn({ children, onClick }) {
  return (
    <>
      <button
        type="submit"
        className={`button_form bg-blue-form_btn w-submitBtn rounded-xl py-3 text-white font-medium text-lg`}
      >
        {children}
      </button>
    </>
  );
}

export default SubmitBtn;
