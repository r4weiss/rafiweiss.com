class GlobalHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        
        <header>
            <nav class="top-nav">
                <a class="top-nav-logo" href="#">
                    <h2>R.</h2>
                </a>

                <ul class="nav-links">
                    <li>
                        <a class="icon-link" href="freelance-work.html">
                            <svg
                                class="link-icon"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9 1.5L11.3175 6.195L16.5 6.9525L12.75 10.605L13.635 15.765L9 13.3275L4.365 15.765L5.25 10.605L1.5 6.9525L6.6825 6.195L9 1.5Z"
                                    stroke="#272637"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            <span class="link-text">Freelance work</span>
                        </a>
                    </li>
                    <li>
                        <a class="icon-link" href="personal-projects.html">
                            <svg
                                class="link-icon"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12.375 7.04973L5.625 3.15723"
                                    stroke="#272637"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M15.75 12.0004V6.00041C15.7497 5.73737 15.6803 5.47902 15.5487 5.25129C15.417 5.02355 15.2278 4.83444 15 4.70291L9.75 1.70291C9.52197 1.57126 9.2633 1.50195 9 1.50195C8.7367 1.50195 8.47803 1.57126 8.25 1.70291L3 4.70291C2.7722 4.83444 2.58299 5.02355 2.45135 5.25129C2.31971 5.47902 2.25027 5.73737 2.25 6.00041V12.0004C2.25027 12.2635 2.31971 12.5218 2.45135 12.7495C2.58299 12.9773 2.7722 13.1664 3 13.2979L8.25 16.2979C8.47803 16.4296 8.7367 16.4989 9 16.4989C9.2633 16.4989 9.52197 16.4296 9.75 16.2979L15 13.2979C15.2278 13.1664 15.417 12.9773 15.5487 12.7495C15.6803 12.5218 15.7497 12.2635 15.75 12.0004Z"
                                    stroke="#272637"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M2.45312 5.21973L9.00062 9.00723L15.5481 5.21973"
                                    stroke="#272637"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M9 16.56V9"
                                    stroke="#272637"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            <span class="link-text">Personal projects</span>
                        </a>
                    </li>
                    <li>
                        <a class="icon-link" href="mailto:rafiweiss01@gmail.com">
                            <svg
                                class="link-icon"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3 3H15C15.825 3 16.5 3.675 16.5 4.5V13.5C16.5 14.325 15.825 15 15 15H3C2.175 15 1.5 14.325 1.5 13.5V4.5C1.5 3.675 2.175 3 3 3Z"
                                    stroke="#272637"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M16.5 4.5L9 9.75L1.5 4.5"
                                    stroke="#272637"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            <span class="link-text">Contact me</span>
                        </a>
                    </li>
                </ul>
                <div class="burger">
                    <div class="line-1"></div>
                    <div class="line-2"></div>
                    <div class="line-3"></div>
                </div>
            </nav>
        </header>
        
        `;
	}
}

customElements.define('global-header', GlobalHeader);
