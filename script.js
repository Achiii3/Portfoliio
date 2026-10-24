class FormValidator {
    constructor(formId, nameId, emailId, errorId) {
        this.form = document.getElementById(formId);
        this.nameInput = document.getElementById(nameId);
        this.emailInput = document.getElementById(emailId);
        this.errorDisplay = document.getElementById(errorId);

        if (this.form) {
            this.form.addEventListener('submit', (event) => this.validate(event));
        }
    }

    validate(event) {
        event.preventDefault();
        this.errorDisplay.style.color = "red";

        if (this.nameInput.value.trim() === "") {
            this.errorDisplay.innerText = "Please enter your name.";
            return;
        }

        if (!this.emailInput.value.includes("@")) {
            this.errorDisplay.innerText = "Please enter a valid email.";
            return;
        }

        this.errorDisplay.style.color = "green";
        this.errorDisplay.innerText = "Message sent successfully!";
        this.form.reset();
    }
}

class ScrollAnimator {
    constructor(targetClass) {
        this.elements = document.querySelectorAll(targetClass);
        
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 }); 
    }

    start() {
        this.elements.forEach(element => {
            this.observer.observe(element);
        });
    }
}

class ModalController {
    constructor(modalId, openBtnId, closeBtnId) {
        this.modal = document.getElementById(modalId);
        this.openBtn = document.getElementById(openBtnId);
        this.closeBtn = document.getElementById(closeBtnId);

        if (this.modal && this.openBtn && this.closeBtn) {
            this.openBtn.addEventListener('click', (event) => {
                event.preventDefault();
                this.openModal();
            });

            this.closeBtn.addEventListener('click', () => this.closeModal());
            
            window.addEventListener('click', (event) => {
                if (event.target === this.modal) {
                    this.closeModal();
                }
            });
        }
    }

    openModal() {
        this.modal.style.display = 'flex'; 
        setTimeout(() => {
            this.modal.classList.add('show');
        }, 10);
    }

    closeModal() {
        this.modal.classList.remove('show');
        setTimeout(() => {
            this.modal.style.display = 'none';
        }, 300);
    }
}

const contactCheck = new FormValidator('contactForm', 'name', 'email', 'error-msg');

const scrollEffects = new ScrollAnimator('.reveal');
scrollEffects.start();

const projectModal = new ModalController('projectModal', 'openModalBtn', 'closeModalBtn');
