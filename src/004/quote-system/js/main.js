
document.querySelector('form')
    .addEventListener('submit', function(evt) {
        // 0) common tasks...
        // ALWAYS prevent the default behaviour of a form submit
        //      (in this course)
        evt.preventDefault(); // 🎵
        const form = evt.target; // This is always <form></form>
        // Every <form> element keeps track of all its input
        // controls and buttons
        const formControls = form.elements;

        console.log('The following are all the controls on the <form>');
        console.log(formControls);

        // 1) Create variables that reference the input controls

        // Output is being displayed as "plain text" in the browser
        const outputControl = formControls.breakdown; // <output name="breakdown" />
        let message = 'Contract Parameters Received...\n';
        outputControl.value = message;


        // Core website development work
        const inputJobDuration = formControls.duration; // <input name="duration" id="job-duration" />
        // const inputJobDuration = formControls['job-duration']; // <input name="duration" id="job-duration" />
        const inputRadioHours = formControls['interval-hours']; // <input type="radio" name="interval" id="interval-hours" />
        const inputRadioWeeks = formControls['interval-weeks']; // <input type="radio" name="interval" id="interval-weeks" />
        // const inputContractPeriod = formControls.interval; // RadioNodeList: <input name="interval" />
        const inputBaseRate = formControls['base-rate']; // <input name="base-rate" />

        let jobDuration = parseFloat(inputJobDuration.value);
        message = `Job duration: ${jobDuration}`;
        let inHours = inputRadioHours.checked;
        let inWeeks = inputRadioWeeks.checked;
        message = `\tinHours:${inHours} | inWeeks:${inWeeks}\n` + message;
        outputControl.value += message;


        // Digital Assets (extra charges)
        const inputImageCount = formControls.digitalAssetCount; // <input name="" />
        const inputPricePerImage = formControls.digitalAssetRate; // <input name="digitalAssetRate" />

        // Content Authoring (extra charges)
        const inputIncludeContent = formControls.includeContent; // <input type="checkbox" name="includeContent" />
        const inputPerWordRate = formControls['per-word-rate']; // <input name="per-word-rate" />
        const inputStartDate = formControls['start-date']; // <input type="date" name="start-date" />

        // 2) Do some validation
        /* Validation Expectations:
         *  - job duration must be greater than zero
         *  - interval selection must be made (hours vs. weeks)
         *  - base rate must be $1000 or greater
         *  - digital assets must be greater than or equal to zero
         *  - if there are digital assets, then the per-asset price must be greater than $10
         *  - if content authoring is to be included, then the per-word-rate must be between 25¢ and $1.25 inclusive
         *  - Start date must be in the future (cannot be on the same day as the quote)
         *  - Start date must not be too far in the future (max is 3 months from today)
         * 
         * Stylistically, add/remove the attribute `aria-invalid="true"` appropriately
         */
        let isValidInput = true; // Optimistic approach
        let errorSummary = ""; // No problems to report (yet)
        // Core website development work
        // btw, we declared jobDuration earlier
        jobDuration = parseFloat(inputJobDuration.value);
//      \_ number _/             \__ <input /> _/ \_ string _/

        //  ✅  - job duration must be greater than zero
        if(isNaN(jobDuration)) {
            isValidInput = false;
            errorSummary += "Job duration is required.\n";
        } else {
            // Yes, it's a number, BUT...
            if(jobDuration <= 0) {
                isValidInput = false;
                errorSummary += "Job duration must be greater than zero.\n";
            }
        }

        //  ✅  - interval selection must be made (hours vs. weeks)
        let missingHoursInput = !inputRadioHours.checked;
        let missingWeeksInput = !inputRadioWeeks.checked;
        if(missingHoursInput && missingWeeksInput) {
            isValidInput = false;
            errorSummary += "You must choose either Hours or Weeks for the duration.\n";
        }

        //  ✅  - base rate must be $1000 or greater
        let baseRate = parseFloat(inputBaseRate.value);
        if(isNaN(baseRate) || baseRate < 1000) {
            isValidInput = false;
            errorSummary += "A base rate is required and must be $1000 or higher.\n";
        }

        // TODO: Try validating the other inputs....

        // 3) If all is good...
        if(isValidInput) {
            // 3a) ... process the form's inputs
            let hourlyRate = 30;
            /* Quote Calculations:
             * - Base Quote = baseRate + interval*hourlyRate
             *                      or + interval*hourlyRate * 35hrs/wk
             * - Image Quote = digitalAssets * assetRate
             * - Content Quote = wordRate * 1000 (min # words for authoring)
             */
        } else {
            // 3b) otherwise, inform the user of the problems
            outputControl.value = errorSummary;
        }

    });
