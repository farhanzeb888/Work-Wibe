document.addEventListener("DOMContentLoaded", () => {
  const urlParam = new URLSearchParams(window.location.search);
  const index = urlParam.get("id");

  const selectJob = jCategory[index];

  const jobDetailsContainer = document.getElementById("jobDetails");
  
  jobDetailsContainer.innerHTML = `
    <div class="job-header">
            <div class="job-img-row">
                <img src=${selectJob.image}>
                <div>
                    <h2>${selectJob.companyName}</h2>
                    <span>${selectJob.location}</span>
                </div>
            </div>
            <a id="g-btn" href="#">Apply Now</a>
        </div>
    <div class="features  obj-width">

      <div class="fe-box">
        <div>
          <i class="bx bx-briefcase"></i>
          <h3>Vacancy</h3>
          <p>
            ${selectJob.vacancy}
          </p>
        </div>
        <div>
          <i class="bx bx-user"></i>
          <h3>Position</h3>
          <p>
            ${selectJob.title}
          </p>
        </div>
        <div>
          <i class="bx bx-time"></i>
          <h3>Hours</h3>
          <p>
            ${selectJob.hours}
          </p>
        </div>
        <div>
          <i class="bx bx-dollar-circle"></i>
          <h3>Salary</h3>
          <p>
            ${selectJob.rate}
          </p>
        </div>
      </div>
    </div>
    <div class="job-description sec-space">
        <h3>Job Description</h3>
        <p>${selectJob.description}</p>

        <h3>Employment Status</h3>
        <p>- ${selectJob.av}</p>

        <h3>Workplace</h3>
        <p>- ${selectJob.workplace}</p>

        <h3>Educational Requirements</h3>
        <p>- ${selectJob.education}</p>

        <h3>Experience Requirements</h3>
        <p>- ${selectJob.experience}</p>
    </div>
    `;
});
