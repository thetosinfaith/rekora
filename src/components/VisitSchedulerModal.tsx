import React, { useState } from "react";
import { format, isSaturday, isBefore, startOfDay } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

const VisitSchedulerModal = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    className: "",
    isFirstTimeVisitor: false,
    howHeard: "",
  });
  const [showForm, setShowForm] = useState(false);

  const handleDayClick = (day) => {
    if (isSaturday(day) && !isBefore(day, startOfDay(new Date()))) {
      setSelectedDate(day);
      setShowForm(true);
      toast.success(
        `You've selected ${format(day, "PPP")}. Please fill out the form.`
      );
    } else {
      toast.error("Please select a future Saturday for your visit.");
      setSelectedDate(null);
      setShowForm(false);
    }
  };

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSelectChange = (id, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Visit Request Submitted:", {
      visitDate: selectedDate ? format(selectedDate, "yyyy-MM-dd") : "N/A",
      ...formData,
    });

    toast.success("Your visit request has been submitted successfully!");

    setFormData({
      name: "",
      email: "",
      role: "",
      className: "",
      isFirstTimeVisitor: false,
      howHeard: "",
    });
    setSelectedDate(null);
    setShowForm(false);
    onClose();
  };

  const disabledDays = (day) => {
    return !isSaturday(day) || isBefore(day, startOfDay(new Date()));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-rekora-dark-blue">
            Visit Rekora Hub (Teacch)
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Sign up to visit our neuroscience equipment hub on a Saturday!
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8 py-4">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-rekora-dark-blue">
              About Teacch Hub
            </h3>
            <p className="text-gray-700 mb-4">
              Welcome to the Rekora Teacch Hub! This is our dedicated space
              where students and teachers can get hands-on experience with
              advanced neuroscience tools like EEG headsets, brain models, and
              more. It's a fantastic opportunity for self-guided learning and to
              deepen your understanding of the brain.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-rekora-dark-blue">
              Directions to Teacch Hub
            </h3>
            <p className="text-gray-700 mb-2">
              <strong>Address:</strong> Rekora Teacch Hub, 123 Innovation Drive,
              Yaba, Lagos, Nigeria.
            </p>
            <p className="text-gray-700 mb-4">
              The hub is conveniently located near the [landmark, e.g.,
              University of Lagos gate].
              <br />
              <strong>Public Transport:</strong> You can take a commercial bus
              ("Danfo") heading to Yaba Market and alight at [specific bus stop,
              e.g., Ozone Cinemas bus stop]. The hub is a short 5-minute walk
              from there.
              <br />
              <strong>Driving:</strong> Limited parking is available on-site.
              Please use the map below for navigation.
            </p>
            <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.385311029272!2d3.344445!3d6.589885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b922a9b343715%3A0xc07a2c4e2a8c3d97!2sYour%20Teacch%20Hub%20Location!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Teacch Hub Location"
              ></iframe>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-rekora-dark-blue">
              Choose Your Visit Date
            </h3>
            <p className="text-gray-700 mb-4">
              Select an available Saturday from the calendar below.
            </p>
            <div className="flex justify-center mb-6 border rounded-lg p-2 bg-white shadow-sm">
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={handleDayClick}
                disabled={disabledDays}
                fromMonth={new Date()}
                modifiersClassNames={{
                  selected: "bg-rekora-dark-blue text-white",
                  today: "border border-rekora-dark-blue",
                  disabled: "text-gray-400 opacity-50 cursor-not-allowed",
                }}
                classNames={{
                  root: "rdp-root",
                  caption: "flex justify-center py-2 relative items-center",
                  caption_label: "text-lg font-medium text-rekora-dark-blue",
                  nav: "flex gap-1",
                  nav_button:
                    "h-9 w-9 bg-transparent p-0 opacity-50 hover:opacity-100",
                  nav_button_previous: "absolute left-1",
                  nav_button_next: "absolute right-1",
                  table: "w-full border-collapse",
                  head_row: "flex",
                  head_cell:
                    "text-rekora-dark-blue rounded-md w-9 font-normal text-[0.8rem]",
                  row: "flex w-full mt-2",
                  cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-range-start)]:rounded-l-md [&:has([aria-selected].day-range-middle)]:rounded-md [&:has([aria-selected])]:bg-gray-100 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                  day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 text-black",
                  day_range_end: "day-range-end",
                  day_selected:
                    "bg-rekora-dark-blue text-white hover:bg-rekora-dark-blue hover:text-white focus:bg-rekora-dark-blue focus:text-white",
                  day_today: "text-rekora-dark-blue",
                  day_outside: "day-outside text-gray-500 opacity-50",
                  day_disabled: "text-gray-400 opacity-50 cursor-not-allowed",
                  day_range_middle:
                    "aria-selected:bg-gray-100 aria-selected:text-black",
                  day_hidden: "invisible",
                }}
              />
            </div>

            {selectedDate && showForm && (
              <div className="mt-6 p-4 border rounded-lg bg-gray-50">
                <h4 className="text-lg font-semibold mb-4 text-rekora-dark-blue">
                  Sign-up for {format(selectedDate, "PPP")}
                </h4>
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 gap-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="role">Your Role</Label>
                    <Select
                      onValueChange={(value) =>
                        handleSelectChange("role", value)
                      }
                      value={formData.role}
                      required
                    >
                      <SelectTrigger id="role">
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="teacher">Teacher</SelectItem>
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {formData.role === "student" && (
                    <div>
                      <Label htmlFor="className">Class (e.g., JSS3, SS2)</Label>
                      <Input
                        id="className"
                        type="text"
                        value={formData.className}
                        onChange={handleChange}
                        placeholder="e.g., SS2 Science"
                      />
                    </div>
                  )}

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="isFirstTimeVisitor"
                      checked={formData.isFirstTimeVisitor}
                      onCheckedChange={(checked) =>
                        handleSelectChange("isFirstTimeVisitor", checked)
                      }
                    />
                    <Label htmlFor="isFirstTimeVisitor">
                      First-time visitor to Rekora Hub?
                    </Label>
                  </div>

                  <div>
                    <Label htmlFor="howHeard">
                      How did you hear about Rekora?
                    </Label>
                    <Input
                      id="howHeard"
                      type="text"
                      value={formData.howHeard}
                      onChange={handleChange}
                      placeholder="e.g., School program, Friend, Social Media"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-rekora-dark-blue hover:bg-rekora-dark-blue/90 text-white mt-4"
                  >
                    Confirm Visit
                  </Button>
                </form>
              </div>
            )}
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default VisitSchedulerModal;