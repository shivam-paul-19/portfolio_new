function TimeLine() {
    return (
        <>
            <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div class="timeline-middle">
              <svg
                viewBox="0 0 20 20"
                fill="#00F5D4"
                class="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="timeline-start mb-10 md:text-end">
              <time class="font-mono italic">2023-2026</time>
              <div class="text-lg font-black">Vivenkananda Institute of Professional Studies <br /> (Affiliated to GGSIPU)</div>
              <ul>
                <li>Grade: 9.1 CGPA</li>
              </ul>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div class="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#00F5D4"
                class="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="timeline-end mb-10">
              <time class="font-mono italic">2010-2023</time>
              <div class="text-lg font-black">Bal Bhavan Public Sn. Sec. School</div>
              <ul>
                <li>Class 12th: 93%</li>
                <li>Class 10th: 94%</li>
              </ul>
            </div>
          </li>
        </ul>
        </>
    )
}

export default TimeLine;