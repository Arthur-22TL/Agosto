// Rolagem suave para as seções ao clicar nos links da navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Adicionar animação sutil ao rolar
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.benefit, .steps li, .testimonial, .features-list li, .pricing-plan');
hiddenElements.forEach((el) => observer.observe(el));

// Lógica para alternar entre planos Básico e Premium
document.querySelectorAll('.upgrade-button').forEach(button => {
    button.addEventListener('click', function () {
        const course = this.getAttribute('data-course');
        const parentPlan = this.closest('.pricing-plan');
        const basicPlan = parentPlan.querySelector(`.plan-option.basic[data-course="${course}"]`);
        const premiumPlan = parentPlan.querySelector(`.plan-option.premium[data-course="${course}"]`);
        if (basicPlan && premiumPlan) {
            basicPlan.classList.add('hidden');
            premiumPlan.classList.remove('hidden');
        }
    });
});

document.querySelectorAll('.back-button').forEach(button => {
    button.addEventListener('click', function () {
        const course = this.getAttribute('data-course');
        const parentPlan = this.closest('.pricing-plan');
        const basicPlan = parentPlan.querySelector(`.plan-option.basic[data-course="${course}"]`);
        const premiumPlan = parentPlan.querySelector(`.plan-option.premium[data-course="${course}"]`);
        if (basicPlan && premiumPlan) {
            premiumPlan.classList.add('hidden');
            basicPlan.classList.remove('hidden');
        }
    });
});