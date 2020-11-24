import React, { Component } from "react";
import "./Doctor_details.css";
class DoctorDetails extends Component {
  state = {
    clinic_name: "",
    speciality: "",
    experience: "",
    qualification: "",
    fees: "",
    timings: "",
    gender: "",
    address: "",
    city: "",
    state_input: "",
    pincode: "",
    website: "",
    contact: "",
  };
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  postData = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/feed/post", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        name_of_clinic: this.state.clinic_name,
        specialist: this.state.speciality,
        experience: this.state.experience,
        qualification: this.state.qualification,
        fees: Number(this.state.fees),
        timings: this.state.timings,
        gender: this.state.gender,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state_input,
        pin_code: Number(this.state.pincode),
        website: this.state.website,
        phone_no: Number(this.state.contact),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="page_container">
        <div className="form">
          <form>
            <h1 className="title">Enter Details</h1>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="clinic_name">Clinic's Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="clinic_name"
                  name="clinic_name"
                  placeholder="Clinic's Name"
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
              <div class="form-group col-md-6">
                <label for="speciality">Speciality</label>
                <input
                  type="text"
                  class="form-control"
                  id="speciality"
                  name="speciality"
                  placeholder="speciality"
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="experience">Experience</label>
                <input
                  type="text"
                  class="form-control"
                  id="experience"
                  name="experience"
                  placeholder="Experience"
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
              <div class="form-group col-md-6">
                <label for="qualification">Qualification</label>
                <input
                  type="text"
                  class="form-control"
                  id="qualification"
                  name="qualification"
                  placeholder="Qualification"
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="fees">Fees</label>
                <input
                  type="text"
                  class="form-control"
                  id="fees"
                  name="fees"
                  placeholder="Fees"
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
              <div class="form-group col-md-6">
                <label for="timings">Timing</label>
                <input
                  type="text"
                  class="form-control"
                  id="timings"
                  name="timings"
                  placeholder="Timing"
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
            </div>
            <fieldset class="form-group">
              <div class="row">
                <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
                <div class="col-sm-10">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gender"
                      id="gridRadios1"
                      value="male"
                      onChange={(e) => this.handleChange(e)}
                    />
                    <label class="form-check-label" for="gridRadios1">
                      Male
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gender"
                      id="gridRadios2"
                      value="female"
                      onChange={(e) => this.handleChange(e)}
                    />
                    <label class="form-check-label" for="gridRadios2">
                      Female
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
            <div class="form-group">
              <label for="address">Address</label>
              <input
                type="text"
                class="form-control"
                id="address"
                name="address"
                placeholder="1234 Main St"
                onChange={(e) => this.handleChange(e)}
              />
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="city">City</label>
                <input
                  type="text"
                  class="form-control"
                  name="city"
                  id="city"
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
              <div class="form-group col-md-4">
                <label for="state">State</label>
                <input
                  type="text"
                  class="form-control"
                  name="state_input"
                  id="state_input"
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
              <div class="form-group col-md-2">
                <label for="pincode">Zip</label>
                <input
                  type="text"
                  class="form-control"
                  name="pincode"
                  id="pincode"
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="website">Website</label>
                <input
                  type="text"
                  class="form-control"
                  name="website"
                  id="website"
                  placeholder="enter website url"
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputEmail4">Phone no</label>
                <input
                  type="contact"
                  class="form-control"
                  id="contact"
                  name="contact"
                  placeholder="Enter Phone no"
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
            </div>
            <button
              type="submit"
              class="btn btn-primary"
              onClick={(e) => this.postData(e)}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default DoctorDetails;
