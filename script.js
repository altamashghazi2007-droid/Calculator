let display = document.querySelector(".input_taker")
        let current = '';

        function append(value) {
            current += value;
            display.value = current;
        }

        function clearDisplay() {
            current = '';
            display.value = '';
            document.querySelector(".calc__value").innerHTML = '0';
        }
        function calculate() {
            try {
                current = eval(current);
                document.querySelector(".calc__value").innerHTML = current;
            } catch {
                document.querySelector(".calc__value").innerHTML = 'Error';
            }
        }
        function sqrt() {
            try {
                current = Math.sqrt(eval(current));
                document.querySelector(".calc__value").innerHTML = current;
            } catch {
                document.querySelector(".calc__value").innerHTML = 'Error';
            }
        }