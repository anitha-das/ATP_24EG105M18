import { useForm } from "react-hook-form";
function FormDemo()
{
    const {register,//to regster the form fields
        handleSubmit,//to handle for submission
        formState:{errors}  //to handle validations
    }=useForm();

    //Form Submit function
    const onFormSubmit=(obj)=>{
        console.log(obj);
    }
    return (
        <div>
            {/* Username */}
            <h1 className="text-center text-3xl">Form Demo</h1>
            <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit(onFormSubmit)}>
                <div className="mb-3">
                    <label htmlFor="username" className="text-center">Username</label>
                    <input type="text" 
                    {...register("username",
                                     {
                                      required:"UserName Required",
                                      minLength:4,
                                       maxLength:10,
                                    validate:(v)=>v.trim().length!=0 || "White Spaces is not valid"
                                     })}
                    id="username" className="border w-full p-2" />
                {/* username Validation */}
                {errors.username?.type=="required"&& <p className="text-red-500">{errors.username.message}</p>}

                {
                   errors.username?.type=="minLength"&& <p className="text-red-500"> Min length is 4</p>
                }
               
               {
                   errors.username?.type=="maxLength"&& <p className="text-red-500"> Max length is 10</p>
                }
                {
                   errors.username?.type=="validate"&& <p className="text-red-500"> White Space not allowed</p>
                }

                </div>

                {/* Email */}
              <div className="mb-3">
                    <label htmlFor="email" className="text-center">Email</label>
                    <input type="text" {...register("email")} id="email" className="border w-full p-2" />
                </div>
              <button type="submit" className="bg-amber-300 p-2">Submit</button>

            </form>
        </div>
    )
}
export default FormDemo;