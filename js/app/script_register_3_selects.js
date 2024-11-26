// #region Ajuste de color de opción por defecto: Departamento
const departamentoSelectInput = document.getElementById("departamento-select-input");

departamentoSelectInput.addEventListener("change", () => {
    if (departamentoSelectInput.value != 0) {
        departamentoSelectInput.style.color = "black";
        distritoSelectInput.style.color = "#5f5f5f";
        provinciaSelectInput.style.color = "#5f5f5f";
    }
})


const provinciaSelectInput = document.getElementById("provincia-select-input");

provinciaSelectInput.addEventListener("change", () => {
    if (provinciaSelectInput.value != 0) {
        provinciaSelectInput.style.color = "black";
        distritoSelectInput.style.color = "#5f5f5f";
    }
})
// #endregion

const jsonFiles = ['../../data/app/ubigeo_departamentos.json', '../../data/app/ubigeo_provincias.json', '../../data/app/ubigeo_distritos.json'];

// Usamos Promise.all para cargar todos los archivos JSON
Promise.all(
    jsonFiles.map(file =>
        fetch(file)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error al cargar ${file}: ${response.statusText}`);
                }
                return response.json();
            })
    )
)
    .then(([data_dep, data_prov, data_distr]) => {
        // Guardar cada archivo en una variable separada
        const departamentos = data_dep;
        const provincias = data_prov;
        const distritos = data_distr;

        departamentos.forEach(departamento => {
            const option = document.createElement('option');
            option.value = departamento.id;
            option.textContent = departamento.name;
            departamentoSelectInput.appendChild(option);
        });

        departamentoSelectInput.addEventListener('change', () => {
            const selectedDepartment = departamentoSelectInput.value;
            distritoSelectInput.disabled = true;
            provinciaSelectInput.innerHTML = '<option selected disabled hidden value="0">Seleccione su provincia</option>';
            distritoSelectInput.innerHTML = '<option selected disabled hidden value="0">Seleccione su distrito</option>';
            verificarCamposRegisterTwo();

            if (selectedDepartment) {
                const filteredProvinces = provincias.filter(p => p.department_id === selectedDepartment);
                filteredProvinces.forEach(provincia => {
                    const option = document.createElement('option');
                    option.value = provincia.id;
                    option.textContent = provincia.name;
                    provinciaSelectInput.appendChild(option);
                });
                provinciaSelectInput.disabled = false;
                verificarCamposRegisterTwo();
            } else {
                provinciaSelectInput.disabled = true;
            }
        });

        provinciaSelectInput.addEventListener('change', () => {
            const selectedProvince = provinciaSelectInput.value;
            distritoSelectInput.value = 0
            distritoSelectInput.innerHTML = '<option selected disabled hidden value="0">Seleccione su distrito</option>';
            verificarCamposRegisterTwo();

            if (selectedProvince) {
                const filteredDistricts = distritos.filter(d => d.province_id === selectedProvince);
                filteredDistricts.forEach(distrito => {
                    const option = document.createElement('option');
                    option.value = distrito.id;
                    option.textContent = distrito.name;
                    distritoSelectInput.appendChild(option);
                });
                distritoSelectInput.disabled = false;
                verificarCamposRegisterTwo();
            } else {
                distritoSelectInput.disabled = true;
            }
        });

    })
    .catch(error => {
        console.error('Error al cargar los archivos JSON:', error);
    });