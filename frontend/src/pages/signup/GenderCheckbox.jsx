const GenderCheckbox = () => {
  return ( 
    <div className="flex">
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text">Male</span>
          <input type="radio" className="radio-md radio-primary border-gray-600" name="radio-1"/>
        </label>
      </div>

      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text">Female</span>
          <input type="radio" className="radio-md radio-primary border-gray-600" name="radio-1"/>
        </label>
      </div>
    </div>
  );
}
 
export default GenderCheckbox;