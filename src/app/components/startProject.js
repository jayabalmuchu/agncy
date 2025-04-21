import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Slider from "@mui/material/Slider";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Validation schema using Zod
const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  company: z.string().optional(),
  budget: z.array(z.number()).length(2, "Budget range is required"),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
});

const StartProject = ({ isOpen, onClose }) => {
  const [budget, setBudget] = useState([1000, 5000]);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      company: "",
      budget: 5000,
      startDate: "",
      endDate: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    onClose(); // Close the modal after submission (optional)
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <button className="close-btn" onClick={onClose}>
              &times;
            </button>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label>Name:</label>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => <input {...field} className="input" />}
                />
                {errors.name && <p>{errors.name.message}</p>}
              </div>

              <div>
                <label>Email:</label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => <input {...field} className="input" />}
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>

              <div>
                <label>Company (optional):</label>
                <Controller
                  name="company"
                  control={control}
                  render={({ field }) => <input {...field} className="input" />}
                />
              </div>

              <div>
                <label>
                  Budget: ${budget[0]} - ${budget[1]}
                </label>
                <Controller
                  name="budget"
                  control={control}
                  render={({ field }) => (
                    <Slider
                    {...field}
                    value={budget}
                    onChange={(e, newValue) => {
                      setBudget(newValue);
                      field.onChange(newValue);
                    }}
                    min={300}
                    max={10000}
                    step={100}
                    sx={{
                      color: '#235536', // 🌶️ Track & thumb color
                      '& .MuiSlider-thumb': {
                        backgroundColor: '#235536',
                      },
                      '& .MuiSlider-rail': {
                        backgroundColor: '#235536', // background behind the track
                      },
                      '& .MuiSlider-track': {
                        backgroundColor: ' #235536',
                      },
                    }}
                  />
                  )}
                />
                {errors.budget && <p>{errors.budget.message}</p>}
              </div>

              <div>
                <label>Timeline:</label>
                <div className="timeline flex gap-2">
                  <Controller
                    name="startDate"
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        {...field}
                        selected={field.value}
                        onChange={(date) => field.onChange(date)}
                        placeholderText="Start Date"
                        className="input"
                      />
                    )}
                  />
                  <Controller
                    name="endDate"
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        {...field}
                        selected={field.value}
                        onChange={(date) => field.onChange(date)}
                        placeholderText="End Date"
                        minDate={field.value || new Date()}
                        className="input"
                      />
                    )}
                  />
                </div>
                {errors.startDate && <p>{errors.startDate.message}</p>}
                {errors.endDate && <p>{errors.endDate.message}</p>}
              </div>

              <button type="submit" className="mt-4 button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
      <style jsx>
        {`
          .bg-white {
            position: relative; /* 🔥 This is crucial to position the close button inside this box */
            background-color: white;
            border-radius: 12px;
            padding: 2rem;
            width: 100%;
            max-width: 600px;
            overflow: auto;
            z-index: 9999;
          }

          .close-btn {
            position: absolute;
            font-size: 1.5rem;
            background: none;
            border: none;
            cursor: pointer;
            color: #333;
            z-index: 10;
          }

          /* Full Screen Modal */
          .fixed {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 999; /* Ensure it's on top */
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgba(
              0,
              0,
              0,
              0.7
            ); /* Dark background with opacity */
          }

          .bg-white {
            background-color: white;
            border-radius: 8px;
            padding: 2rem;
            width: 100%;
            max-width: 600px; /* Limits max width to 600px for larger screens */
            overflow: auto; /* Allow scroll if content overflows */
            border-radius: 12px; /* Rounded corners for a clean look */
          }

          .input {
            width: 100%;
            padding: 0.75rem;
            margin-bottom: 1rem;
            border: 1px solid #ccc;
            border-radius: 8px;
          }

          .button {
            padding: 0.75rem 1.5rem;
            background-color: #235536;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
          }

          .button:hover {
            background-color: #235536;
          }

          .form-container {
            width: 100%;
            max-width: 100%; /* Full width on small screens */
          }

          form {
            display: flex;
            flex-direction: column;
          }

          /* Close Button */
          .close-btn {
            position: absolute;
            top: 15px;
            right: 15px;
            font-size: 24px;
            cursor: pointer;
          }

          /* Responsiveness: Full screen on small devices */
          @media (max-width: 600px) {
            .bg-white {
              width: 100%; /* Full width */
              padding: 1rem;
              padding-top: 5rem;
              height: 100vh;
            }
              .timeline{
              display: flex; 
              flex-direction: column; 
              }

            .input,
            .button {
              font-size: 16px; /* Adjust text size on smaller screens */
            }

            .close-btn {
              top: 10px;
              right: 10px;
            }
          }

          @media (min-width: 601px) and (max-width: 1024px) {
            .bg-white {
              padding: 1.5rem;
              width: 90%; /* 90% width on tablets and small laptops */
            }
          }
        `}
      </style>
    </>
  );
};

export default StartProject;
