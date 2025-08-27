        // --- Citas de ejemplo (se cargan del localStorage) ---
        let citas = [];
        let clientes = [];
        let agentes = [];
        let configuracion = {
            nombreEmpresa: "CheckEngineRD Unlimited",
            sucursal: "Santo Domingo",
            direccion: "Av. de los Próceres 25, Santo Domingo",
            telefono: "(809) 555-1234",
            moneda: "RD",
            formatoMoneda: "es-DO",
            logo: "https://placehold.co/180x50/ffffff/3498db?text=CheckEngineRD"
        };

        // --- Selectores del DOM ---
        const citaForm = document.getElementById('citaForm');
        const listaCitas = document.getElementById('listaCitas');
        const grupoFiltros = document.getElementById('grupo-filtros');
        const btnExportarExcel = document.getElementById('btnExportarExcel');
        const btnGuardarManual = document.getElementById('btnGuardarManual');
        const btnImportarExcel = document.getElementById('btnImportarExcel');
        const btnCopiarLista = document.getElementById('btnCopiarLista');
        const importarArchivoInput = document.getElementById('importarArchivo');
        const servicioSelect = document.getElementById('servicio');
        const otroServicioContainer = document.getElementById('otroServicioContainer');
        const otroServicioInput = document.getElementById('otroServicio');
        const filtroFechaInput = document.getElementById('filtroFecha');
        const filtroMesSelect = document.getElementById('filtroMes');
        const filtroAnioSelect = document.getElementById('filtroAnio');
        const filtroFacturadoInput = document.getElementById('filtroFacturado');
        const filtroBusquedaInput = document.getElementById('filtroBusqueda');
        const calendarioEl = document.getElementById('calendario');
        const archivoExcelInput = document.getElementById('archivoExcel');
        const vistaPreviaDatos = document.getElementById('vistaPreviaDatos');
        const btnConfirmarImportacion = document.getElementById('btnConfirmarImportacion');
        const importarExcelModalEl = document.getElementById('importarExcelModal');
        const importarExcelModal = new bootstrap.Modal(importarExcelModalEl);
        const seleccionarAgenteModalEl = document.getElementById('seleccionarAgenteModal');
        const seleccionarAgenteModal = new bootstrap.Modal(seleccionarAgenteModalEl);
        const listaAgentes = document.getElementById('listaAgentes');
        const filtroAgente = document.getElementById('filtroAgente');
        const btnSeleccionarAgente = document.getElementById('btnSeleccionarAgente');
        const agenteSelect = document.getElementById('agente');
        const configuracionModalEl = document.getElementById('configuracionModal');
        const configuracionModal = new bootstrap.Modal(configuracionModalEl);
        const gestionAgentesModalEl = document.getElementById('gestionAgentesModal');
        const gestionAgentesModal = new bootstrap.Modal(gestionAgentesModalEl);
        const agenteForm = document.getElementById('agenteForm');
        const btnGuardarAgente = document.getElementById('btnGuardarAgente');
        const btnEliminarAgente = document.getElementById('btnEliminarAgente');
        const tablaAgentes = document.getElementById('tablaAgentes');

        // Modal para editar
        const editarCitaModalEl = document.getElementById('editarCitaModal');
        const editarCitaForm = document.getElementById('editarCitaForm');
        const btnGuardarEdicion = document.getElementById('btnGuardarEdicion');
        const editarIdInput = document.getElementById('editarId');
        const editarNombreClienteInput = document.getElementById('editarNombreCliente');
        const editarTelefonoInput = document.getElementById('editarTelefono');
        const editarMarcaInput = document.getElementById('editarMarca');
        const editarModeloInput = document.getElementById('editarModelo');
        const editarAnioInput = document.getElementById('editarAnio');
        const editarFechaInput = document.getElementById('editarFecha');
        const editarHoraInput = document.getElementById('editarHora');
        const editarServicioSelect = document.getElementById('editarServicio');
        const editarOtroServicioContainer = document.getElementById('editarOtroServicioContainer');
        const editarOtroServicioInput = document.getElementById('editarOtroServicio');
        const editarNotasInput = document.getElementById('editarNotas');
        const editarAgenteInput = document.getElementById('editarAgente');
        const editarEstadoSelect = document.getElementById('editarEstado');
        const editarFacturadoInput = document.getElementById('editarFacturado');
        const editarMontoInput = document.getElementById('editarMonto');
        const editarTieneCotizacionSelect = document.getElementById('editarTieneCotizacion');
        const editarMotivoCotizacionContainer = document.getElementById('editarMotivoCotizacionContainer');
        const editarMotivoCotizacionInput = document.getElementById('editarMotivoCotizacion');
        const editarEsPromocionCheck = document.getElementById('editarEsPromocion');
        const editarPromoContainer = document.getElementById('editarPromoContainer');
        const editarPrecioRegularInput = document.getElementById('editarPrecioRegular');
        const editarPrecioPromocionalInput = document.getElementById('editarPrecioPromocional');

        // Modal para el cupón
        const cuponModalEl = document.getElementById('cuponModal');
        const cuponContent = document.getElementById('cuponContent');

        // Modal de confirmación para eliminar
        const confirmarEliminarModalEl = document.getElementById('confirmarEliminarModal');
        const btnConfirmarEliminar = document.getElementById('btnConfirmarEliminar');
        let citaIdAEliminar = null;

        // Configuración
        const configNombreEmpresa = document.getElementById('configNombreEmpresa');
        const configSucursal = document.getElementById('configSucursal');
        const configDireccion = document.getElementById('configDireccion');
        const configTelefono = document.getElementById('configTelefono');
        const configLogo = document.getElementById('configLogo');
        const logoPreview = document.getElementById('logoPreview');
        const configMoneda = document.getElementById('configMoneda');
        const configFormatoMoneda = document.getElementById('configFormatoMoneda');
        const btnGuardarConfiguracion = document.getElementById('btnGuardarConfiguracion');
        const configQrUrlInput = document.getElementById('configQrUrl');
        const headerLogo = document.getElementById('headerLogo');
        const headerEmpresaNombre = document.getElementById('headerEmpresaNombre');
        const simboloMoneda = document.getElementById('simboloMoneda');
        const configPrimaryColorInput = document.getElementById('configPrimaryColor');
        const configSecondaryColorInput = document.getElementById('configSecondaryColor');
        const simboloMonedaInput = document.getElementById('simboloMonedaInput');

        // Agente Form
        const agenteIdInput = document.getElementById('agenteId');
        const agenteNombreInput = document.getElementById('agenteNombre');
        const agenteEmailInput = document.getElementById('agenteEmail');
        const agenteTelefonoInput = document.getElementById('agenteTelefono');
        const agenteActivoInput = document.getElementById('agenteActivo');

        // Formulario de nueva cita - Promoción
        const esPromocionCheck = document.getElementById('esPromocion');
        const promoContainer = document.getElementById('promoContainer');

        // Dashboard
        const proximasCitasContainer = document.getElementById('proximasCitasContainer');
        const actividadRecienteContainer = document.getElementById('actividadRecienteContainer');

        // Reportes
        const filtroReporteFechaInicioInput = document.getElementById('filtroReporteFechaInicio');
        const filtroReporteFechaFinInput = document.getElementById('filtroReporteFechaFin');
        const filtroReporteAgenteSelect = document.getElementById('filtroReporteAgente');
        const filtroReporteServicioSelect = document.getElementById('filtroReporteServicio');
        const grupoFiltrosReportes = document.getElementById('grupo-filtros-reportes');
        const filtroReporteFacturadoInput = document.getElementById('filtroReporteFacturado');

        // Clientes
        const listaClientes = document.getElementById('listaClientes');
        const filtroClientes = document.getElementById('filtroClientes');
        const historialClienteContainer = document.getElementById('historialClienteContainer');
        const placeholderCliente = document.getElementById('placeholderCliente');
        const nombreClienteHistorial = document.getElementById('nombreClienteHistorial');
        const telefonoClienteHistorial = document.getElementById('telefonoClienteHistorial');
        const tablaHistorialCliente = document.getElementById('tablaHistorialCliente');
        const btnNuevoCliente = document.getElementById('btnNuevoCliente');
        const clienteModalEl = document.getElementById('clienteModal');
        const clienteModal = new bootstrap.Modal(clienteModalEl);
        const clienteForm = document.getElementById('clienteForm');
        const btnGuardarCliente = document.getElementById('btnGuardarCliente');

        // Datos para importación
        let datosImportados = [];
        let agenteSeleccionado = null;

        // Gráficos
        let estadoChart = null;
        let facturacionChart = null;
        let calendario = null;

        // --- Funciones de Utilidad ---
        /**
         * Muestra un mensaje temporal en la pantalla.
         * @param {string} mensaje - El texto del mensaje.
         * @param {string} tipo - El tipo de alerta ('success', 'danger', 'warning', 'info').
         */
        function mostrarMensaje(mensaje, tipo) {
            const mensajeContainer = document.getElementById('mensajeContainer');
            const mensajeAlerta = document.getElementById('mensajeAlerta');
            mensajeAlerta.textContent = mensaje;
            mensajeAlerta.className = `alert alert-${tipo}`;
            mensajeContainer.style.display = 'block';
            setTimeout(() => {
                mensajeContainer.style.display = 'none';
            }, 3000);
        }

        /**
         * Retorna la clase de badge de Bootstrap según el estado.
         * @param {string} estado - El estado de la cita.
         * @returns {string} La clase CSS para el badge.
         */
        function getBadgeClass(estado) {
            switch (estado) {
                case 'pendiente':
                    return 'badge bg-secondary';
                case 'recibido':
                    return 'badge bg-info';
                case 'completada':
                    return 'badge bg-success';
                case 'reagendada':
                    return 'badge bg-warning';
                case 'no_asistio':
                    return 'badge bg-danger';
                case 'cancelada':
                    return 'badge bg-dark';
                default:
                    return 'badge bg-primary';
            }
        }

        /**
         * Retorna el color para el evento del calendario según el estado de la cita.
         * @param {string} estado - El estado de la cita.
         * @returns {string} El código de color hexadecimal.
         */
        function getEventColor(estado) {
            switch (estado) {
                case 'pendiente': return '#6c757d'; // secondary
                case 'recibido': return '#17a2b8'; // info
                case 'completada': return '#28a745'; // success
                case 'reagendada': return '#ffc107'; // warning
                case 'no_asistio': return '#dc3545'; // danger
                case 'cancelada': return '#343a40'; // dark
                default: return '#3498db'; // primary
            }
        }


        /**
         * Retorna los íconos de estado financiero.
         * @param {object} cita - Objeto de la cita.
         * @returns {string} HTML con los íconos.
         */
        function getFinanzasIcons(cita) {
            let icons = '';
            // Ícono de facturación
            const facturadoIcon = cita.facturado
                ? '<i class="fas fa-money-bill-wave text-success finanzas-icon" title="Facturado"></i>'
                : '<i class="fas fa-money-bill-wave text-muted finanzas-icon" title="No facturado"></i>';
            icons += facturadoIcon;

            // Ícono de cotización
            switch (cita.tieneCotizacion) {
                case 'si':
                    icons += '<i class="fas fa-check-circle text-success finanzas-icon" title="Con cotización"></i>';
                    break;
                case 'no':
                    icons += '<i class="fas fa-exclamation-circle text-danger finanzas-icon" title="¡Sin cotización!"></i>';
                    break;
                case 'no_aplica':
                default:
                    icons += '<i class="fas fa-minus-circle text-secondary finanzas-icon" title="No aplica cotización"></i>';
                    break;
            }
            return icons;
        }

        /**
         * Convierte el estado de Excel al formato interno
         * @param {string} estadoExcel - Estado en formato Excel
         * @returns {string} Estado en formato interno
         */
        function convertirEstado(estadoExcel) {
            if (!estadoExcel) return 'pendiente';
            
            const estados = {
                'pendiente': 'pendiente',
                'recibido': 'recibido',
                'completada': 'completada',
                'reagendada': 'reagendada',
                'no asistio': 'no_asistio',
                'no asistió': 'no_asistio',
                'no_asistio': 'no_asistio',
                'cancelada': 'cancelada',
                'facturado': 'completada'
            };
            
            return estados[estadoExcel.toLowerCase()] || 'pendiente';
        }

        /**
         * Convierte la hora de Excel al formato interno
         * @param {string} horaExcel - Hora en formato Excel
         * @returns {string} Hora en formato interno
         */
        function convertirHora(horaExcel) {
            if (!horaExcel) return '08:00';
            
            // Intentar parsear diferentes formatos de hora
            const hora = horaExcel.toString().toLowerCase();
            
            if (hora.includes('8:00')) return '08:00';
            if (hora.includes('9:00')) return '09:00';
            if (hora.includes('10:00')) return '10:00';
            if (hora.includes('11:00')) return '11:00';
            if (hora.includes('12:00')) return '12:00';
            if (hora.includes('13:00') || hora.includes('1:00')) return '13:00';
            if (hora.includes('14:00') || hora.includes('2:00')) return '14:00';
            if (hora.includes('15:00') || hora.includes('3:00')) return '15:00';
            if (hora.includes('16:00') || hora.includes('4:00')) return '16:00';
            
            return '08:00';
        }

        /**
         * Formatea un monto a formato de dinero según la configuración
         * @param {number} monto - Monto a formatear
         * @returns {string} Monto formateado
         */
        function formatearMonto(monto) {
            if (!monto || isNaN(monto)) {
                switch(configuracion.moneda) {
                    case 'USD': return '$0.00';
                    case 'EUR': return '€0,00';
                    default: return 'RD$0.00';
                }
            }
            
            const opciones = {
                style: 'currency',
                currency: configuracion.moneda === 'RD' ? 'DOP' : configuracion.moneda,
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            };
            
            // Para el peso dominicano, forzamos el símbolo RD$
            if (configuracion.moneda === 'RD') {
                opciones.currencyDisplay = 'code';
            }
            
            let valorFormateado = new Intl.NumberFormat(configuracion.formatoMoneda, opciones).format(monto);
            
            // Reemplazar DOP con RD$ para el peso dominicano
            if (configuracion.moneda === 'RD') {
                valorFormateado = valorFormateado.replace('DOP', 'RD$');
            }
            
            return valorFormateado;
        }

        /**
         * Obtiene el símbolo de moneda según la configuración
         * @returns {string} Símbolo de moneda
         */
        function obtenerSimboloMoneda() {
            switch(configuracion.moneda) {
                case 'USD': return '$';
                case 'EUR': return '€';
                default: return 'RD$';
            }
        }

        /**
         * Parsea un monto desde diferentes formatos
         * @param {string} montoStr - String del monto
         * @returns {number} Monto parseado
         */
        function parsearMonto(montoStr) {
            if (!montoStr) return 0;
            
            // Remover caracteres no numéricos excepto punto y coma
            const numeroStr = montoStr.toString().replace(/[^\d,.-]/g, '');
            
            // Reemplazar coma por punto si es necesario
            const numeroNormalizado = numeroStr.replace(',', '.');
            
            // Convertir a número
            const monto = parseFloat(numeroNormalizado);
            
            return isNaN(monto) ? 0 : monto;
        }

        /**
         * Convierte una fecha de Excel a formato JavaScript
         * @param {number} excelDate - Fecha en formato Excel (número de serie)
         * @returns {string} Fecha en formato YYYY-MM-DD
         */
        function convertirFechaExcel(excelDate) {
            // Si es un número de serie de Excel (días desde 1900-01-01)
            if (typeof excelDate === 'number') {
                const fecha = new Date((excelDate - 25569) * 86400 * 1000);
                return fecha.toISOString().split('T')[0];
            }
            
            // Si ya es una cadena, intentar parsearla
            return normalizarFecha(excelDate);
        }

        // --- Funciones Principales ---
        /**
         * Carga las citas desde localStorage.
         */
        function cargarCitas() {
            const citasGuardadas = localStorage.getItem('citas');
            citas = citasGuardadas ? JSON.parse(citasGuardadas) : [];
            
            // Cargar agentes
            cargarAgentes();
            
            // Cargar clientes
            cargarClientes();

            // Cargar configuración
            cargarConfiguracion();
            
            // Migrar datos antiguos si es necesario
            migrarDatosAntiguos();
            
            // Actualizar citas pendientes pasadas a "No Asistió"
            actualizarCitasPasadas();

            // Actualizar resumen
            actualizarResumen();
            
            // Renderizar el dashboard inicial
            renderDashboard();
            
            // Cargar años en el filtro
            cargarFiltroAnios();
            
            // Cargar agentes en los selects
            cargarAgentesEnSelects();

            // Cargar servicios en los selects de reportes
            cargarServiciosEnSelects();

        }

        /**
         * Carga la configuración desde localStorage
         */
        function cargarConfiguracion() {
            const configGuardada = localStorage.getItem('configuracion');
            if (configGuardada) {
                configuracion = JSON.parse(configGuardada);
                aplicarConfiguracion();
            }
        }

        /**
         * Aplica la configuración cargada a la interfaz
         */
        function aplicarConfiguracion() {
            // Actualizar logo y nombre de empresa
            headerLogo.src = configuracion.logo;
            headerEmpresaNombre.textContent = configuracion.nombreEmpresa;
            
            // Actualizar símbolos de moneda
            const simbolo = obtenerSimboloMoneda();
            simboloMoneda.textContent = simbolo;
            simboloMonedaInput.textContent = simbolo;

            // Aplicar colores
            document.documentElement.style.setProperty('--primary-color', configuracion.primaryColor || '#2c3e50');
            document.documentElement.style.setProperty('--secondary-color', configuracion.secondaryColor || '#3498db');
            
            // Actualizar formulario de configuración
            if (configNombreEmpresa) {
                configNombreEmpresa.value = configuracion.nombreEmpresa;
                configSucursal.value = configuracion.sucursal;
                configDireccion.value = configuracion.direccion;
                configTelefono.value = configuracion.telefono;
                configMoneda.value = configuracion.moneda;
                configFormatoMoneda.value = configuracion.formatoMoneda;
                logoPreview.src = configuracion.logo;
                configQrUrlInput.value = configuracion.qrUrl || '';
                configPrimaryColorInput.value = configuracion.primaryColor || '#2c3e50';
                configSecondaryColorInput.value = configuracion.secondaryColor || '#3498db';
            }
        }

        /**
         * Guarda la configuración en localStorage
         */
        function guardarConfiguracion() {
            localStorage.setItem('configuracion', JSON.stringify(configuracion));
            aplicarConfiguracion();
            mostrarMensaje("Configuración guardada correctamente.", "success");
        }

        /**
         * Carga los clientes desde localStorage
         */
        function cargarClientes() {
            const clientesGuardados = localStorage.getItem('clientes');
            clientes = clientesGuardados ? JSON.parse(clientesGuardados) : [];
            renderClientes();
        }

        /**
         * Guarda los clientes en localStorage
         */
        function guardarClientes() {
            localStorage.setItem('clientes', JSON.stringify(clientes));
        }

        /**
         * Carga los agentes desde localStorage
         */
        function cargarAgentes() {
            const agentesGuardados = localStorage.getItem('agentes');
            agentes = agentesGuardados ? JSON.parse(agentesGuardados) : [
                { id: 1, nombre: "Juan Pérez", email: "juan@checkenginerd.com", telefono: "809-555-0101", activo: true },
                { id: 2, nombre: "María García", email: "maria@checkenginerd.com", telefono: "809-555-0102", activo: true },
                { id: 3, nombre: "Carlos Rodríguez", email: "carlos@checkenginerd.com", telefono: "809-555-0103", activo: true }
            ];
            
            // Renderizar tabla de agentes
            renderAgentes();
        }

        /**
         * Guarda los agentes en localStorage
         */
        function guardarAgentes() {
            localStorage.setItem('agentes', JSON.stringify(agentes));
            renderAgentes();
            cargarAgentesEnSelects();
        }

        /**
         * Renderiza la tabla de agentes
         */
        function renderAgentes() {
            if (!tablaAgentes) return;
            
            tablaAgentes.innerHTML = '';
            
            agentes.forEach(agente => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${agente.nombre}</td>
                    <td>${agente.email || 'N/A'}</td>
                    <td>${agente.telefono || 'N/A'}</td>
                    <td><span class="badge ${agente.activo ? 'bg-success' : 'bg-secondary'}">${agente.activo ? 'Activo' : 'Inactivo'}</span></td>
                    <td>
                        <button class="btn btn-sm btn-outline-primary" onclick="editarAgente(${agente.id})">
                            <i class="fas fa-edit"></i>
                        </button>
                    </td>
                `;
                tablaAgentes.appendChild(tr);
            });
        }

        /**
         * Carga los agentes en los selects del formulario
         */
        function cargarAgentesEnSelects() {
            if (!agenteSelect || !editarAgenteInput) return;
            
            // Limpiar selects
            agenteSelect.innerHTML = '';
            editarAgenteInput.innerHTML = '';
            
            // Agregar opción por defecto
            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.textContent = 'Seleccione un agente...';
            agenteSelect.appendChild(defaultOption.cloneNode(true));
            editarAgenteInput.appendChild(defaultOption.cloneNode(true));
            
            // Agregar agentes activos
            agentes.filter(a => a.activo).forEach(agente => {
                const option = document.createElement('option');
                option.value = agente.id;
                option.textContent = agente.nombre;
                agenteSelect.appendChild(option.cloneNode(true));
                editarAgenteInput.appendChild(option.cloneNode(true));
            });
        }

        /**
         * Carga los servicios únicos en el select de filtros de reportes.
         */
        function cargarServiciosEnSelects() {
            if (!filtroReporteServicioSelect) return;

            const serviciosUnicos = new Set();
            citas.forEach(cita => {
                const servicio = cita.servicio === 'Otro' ? cita.otroServicio : cita.servicio;
                if (servicio) {
                    serviciosUnicos.add(servicio);
                }
            });

            const serviciosOrdenados = Array.from(serviciosUnicos).sort();

            filtroReporteServicioSelect.innerHTML = '<option value="">Todos los servicios</option>';
            serviciosOrdenados.forEach(servicio => {
                const option = document.createElement('option');
                option.value = servicio;
                option.textContent = servicio;
                filtroReporteServicioSelect.appendChild(option);
            });
        }

        /**
         * Carga los años disponibles en el filtro
         */
        function cargarFiltroAnios() {
            if (!filtroAnioSelect) return;
            
            // Obtener años únicos de las citas
            const anios = new Set();
            citas.forEach(cita => {
                if (cita.fecha) {
                    // Se añade T12:00 para forzar la interpretación en la zona horaria local
                    const anio = new Date(cita.fecha + 'T12:00:00').getFullYear();
                    anios.add(anio);
                }
            });
            
            // Ordenar años de forma descendente
            const aniosOrdenados = Array.from(anios).sort((a, b) => b - a);
            
            // Limpiar select
            filtroAnioSelect.innerHTML = '<option value="">Todos los años</option>';
            
            // Agregar años
            aniosOrdenados.forEach(anio => {
                const option = document.createElement('option');
                option.value = anio;
                option.textContent = anio;
                filtroAnioSelect.appendChild(option);
            });
        }

        /**
         * Función para migrar datos antiguos a la nueva estructura
         */
        function migrarDatosAntiguos() {
            let necesitaGuardar = false;
            
            for (let i = 0; i < citas.length; i++) {
                // Si existe el campo 'vehiculo' pero no 'marca', migrar los datos
                if (citas[i].vehiculo && !citas[i].marca) {
                    citas[i].marca = citas[i].vehiculo;
                    delete citas[i].vehiculo;
                    necesitaGuardar = true;
                }
                
                // Si no existe el campo 'modelo', crearlo vacío
                if (!citas[i].hasOwnProperty('modelo')) {
                    citas[i].modelo = "";
                    necesitaGuardar = true;
                }
                
                // Si no existe el campo 'agente', crearlo vacío
                if (!citas[i].hasOwnProperty('agente')) {
                    citas[i].agente = "";
                    necesitaGuardar = true;
                }
                
                // Si no existe el campo 'tieneCotizacion', crearlo con valor por defecto
                if (!citas[i].hasOwnProperty('tieneCotizacion')) {
                    citas[i].tieneCotizacion = "no_aplica";
                    necesitaGuardar = true;
                }
                
                // Si no existe el campo 'motivoCotizacion', crearlo vacío
                if (!citas[i].hasOwnProperty('motivoCotizacion')) {
                    citas[i].motivoCotizacion = "";
                    necesitaGuardar = true;
                }
                
                // Si no existe el campo 'otroServicio', crearlo vacío
                if (!citas[i].hasOwnProperty('otroServicio')) {
                    citas[i].otroServicio = "";
                    necesitaGuardar = true;
                }

                // Si no existe el campo 'enCamino', crearlo con valor por defecto
                if (!citas[i].hasOwnProperty('enCamino')) {
                    citas[i].enCamino = false;
                    necesitaGuardar = true;
                }

                // Si no existen los campos de promoción, crearlos con valores por defecto
                if (!citas[i].hasOwnProperty('esPromocion')) {
                    citas[i].esPromocion = false;
                    necesitaGuardar = true;
                }
                if (!citas[i].hasOwnProperty('precioRegular')) {
                    citas[i].precioRegular = 0;
                    citas[i].precioPromocional = 0;
                    necesitaGuardar = true;
                }

                // Normalizar fecha y hora para asegurar compatibilidad con FullCalendar
                const fechaOriginal = citas[i].fecha;
                const horaOriginal = citas[i].hora;
                
                const fechaNormalizada = normalizarFecha(fechaOriginal);
                const horaNormalizada = normalizarHora(horaOriginal);

                if (fechaNormalizada !== fechaOriginal || horaNormalizada !== horaOriginal) {
                    citas[i].fecha = fechaNormalizada;
                    citas[i].hora = horaNormalizada;
                    necesitaGuardar = true;
                }
            }
            
            if (necesitaGuardar) {
                guardarCitas();
                mostrarMensaje("Datos antiguos migrados y normalizados correctamente.", "info");
            }
        }
        
        /**
         * Actualiza el estado de las citas pendientes de días anteriores a 'No Asistió'.
         */
        function actualizarCitasPasadas() {
            const hoy = new Date().toISOString().split('T')[0];
            let cambiosRealizados = false;

            citas.forEach(cita => {
                // Comprueba si la cita está pendiente y su fecha es anterior a hoy
                if (cita.estado === 'pendiente' && cita.fecha < hoy) {
                    cita.estado = 'no_asistio';
                    cambiosRealizados = true;
                }
            });

            if (cambiosRealizados) {
                guardarCitas();
                mostrarMensaje("Se han actualizado las citas pendientes pasadas a 'No Asistió'.", 'info');
            }
        }
        
        /**
         * Sincroniza la lista de clientes con las citas completadas/recibidas
         */
        function sincronizarClientesDesdeCitas() {
            let nuevosClientesCount = 0;
            citas.forEach(cita => {
                if (cita.estado === 'recibido' || cita.estado === 'completada') {
                    // Usar el teléfono como identificador único
                    const clienteExistente = clientes.find(cli => cli.telefono === cita.telefono);
                    if (!clienteExistente) {
                        const nuevoId = clientes.length > 0 ? Math.max(...clientes.map(c => c.id)) + 1 : 1;
                        clientes.push({ id: nuevoId, nombre: cita.nombreCliente, telefono: cita.telefono, email: '' });
                        nuevosClientesCount++;
                    }
                }
            });

            if (nuevosClientesCount > 0) {
                guardarClientes();
            }
        }

        /**
         * Guarda las citas en localStorage.
         */
        function guardarCitas() {
            localStorage.setItem('citas', JSON.stringify(citas));
        }

        /**
         * Renderiza la tabla de citas en el DOM.
         */
        function renderCitas() {
            if (!listaCitas) return;
            
            listaCitas.innerHTML = '';
            
            // Obtener todos los valores de los filtros
            const busquedaTermino = (filtroBusquedaInput.value || '').toLowerCase().trim();
            const estadosActivos = [...grupoFiltros.querySelectorAll('button.active')].map(btn => btn.dataset.estado);
            const todasActivo = estadosActivos.includes('todas');
            const fechaFiltro = filtroFechaInput.value;
            const mesFiltro = filtroMesSelect.value;
            const anioFiltro = filtroAnioSelect.value;
            const facturadoFiltro = filtroFacturadoInput.checked;

            // Filtrar las citas
            const citasFiltradas = obtenerCitasFiltradas();
            
            citasFiltradas.forEach(cita => {
                const tr = document.createElement('tr');
                tr.setAttribute('data-estado-cita', cita.estado);
                tr.setAttribute('data-fecha-cita', cita.fecha);
                
                // Obtener nombre del agente
                const agente = agentes.find(a => a.id == cita.agente) || { nombre: 'N/A' };
                
                tr.innerHTML = `
                    <td>${formatearFechaParaVisualizacion(cita.fecha)}<br><span class="text-muted">${cita.hora}</span></td>
                    <td>
                        ${cita.nombreCliente} ${cita.enCamino ? '<i class="fas fa-car text-success ms-2" title="Cliente en camino"></i>' : ''}<br>
                        <span class="text-muted">
                            ${cita.telefono}
                            <a href="${generarLinkWhatsApp(cita)}" target="_blank" class="ms-2 text-success" title="Enviar recordatorio por WhatsApp">
                                <i class="fab fa-whatsapp"></i>
                            </a>
                        </span>
                    </td>
                    <td>${cita.marca}</td>
                    <td>${cita.modelo}</td>
                    <td>${cita.anio}</td>
                    <td>${agente.nombre}</td>
                    <td>
                        <span class="${getBadgeClass(cita.estado)}">${cita.estado.charAt(0).toUpperCase() + cita.estado.slice(1).replace('_', ' ')}</span>
                    </td>
                    <td>
                        ${getFinanzasIcons(cita)}
                        ${cita.facturado ? `<div class="text-small">${formatearMonto(cita.monto)}</div>` : ''}
                    </td>
                    <td>
                        <div class="btn-group btn-group-sm" role="group">
                            <button type="button" class="btn ${cita.enCamino ? 'btn-success' : 'btn-outline-secondary'} btn-action" onclick="marcarEnCamino(${cita.id})" title="${cita.enCamino ? "Desmarcar 'En Camino'" : "Marcar 'En Camino'"}">
                                <i class="fas fa-car"></i>
                            </button>
                            <button type="button" class="btn btn-outline-warning btn-action" onclick="abrirEditarModal(${cita.id})" title="Editar cita">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button type="button" class="btn btn-outline-info btn-action" onclick="abrirCuponModal(${cita.id})" title="Ver cupón">
                                <i class="fas fa-ticket-alt"></i>
                            </button>
                            <button type="button" class="btn btn-outline-danger btn-action" onclick="abrirConfirmacionEliminar(${cita.id})" title="Eliminar cita">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                        </div>
                    </td>
                `;
                listaCitas.appendChild(tr);
            });

            // Recalcular las estadísticas basadas en el conjunto filtrado
            calcularEstadisticas(citasFiltradas);
            
            // Actualizar resumen
            actualizarResumen();
            
            // Generar reportes
            generarReportes();

            // Renderizar el calendario
            renderCalendario();
        }

        /**
         * Renderiza el contenido del dashboard.
         */
        function renderDashboard() {
            renderProximasCitas();
            renderActividadReciente();
        }

        /**
         * Renderiza la lista de próximas citas en el dashboard.
         */
        function renderProximasCitas() {
            if (!proximasCitasContainer) return;

            const hoy = new Date().toISOString().split('T')[0];
            const proximas = citas
                .filter(c => c.fecha >= hoy && c.estado === 'pendiente')
                .sort((a, b) => new Date(`${a.fecha}T${a.hora}`) - new Date(`${b.fecha}T${b.hora}`))
                .slice(0, 5);

            proximasCitasContainer.innerHTML = '';
            if (proximas.length === 0) {
                proximasCitasContainer.innerHTML = '<li class="list-group-item text-center text-muted">No hay citas pendientes próximas.</li>';
                return;
            }

            proximas.forEach(cita => {
                const li = document.createElement('li');
                li.className = 'list-group-item d-flex justify-content-between align-items-center';
                li.innerHTML = `
                    <div>
                        <strong>${cita.nombreCliente}</strong> - ${cita.marca} ${cita.modelo}<br>
                        <small class="text-muted">${formatearFechaParaVisualizacion(cita.fecha)} a las ${cita.hora}</small>
                    </div>
                    <button class="btn btn-sm btn-outline-primary" onclick="abrirEditarModal(${cita.id})"><i class="fas fa-eye"></i></button>
                `;
                proximasCitasContainer.appendChild(li);
            });
        }

        /**
         * Renderiza la lista de actividad reciente en el dashboard.
         */
        function renderActividadReciente() {
            if (!actividadRecienteContainer) return;

            const recientes = [...citas].sort((a, b) => b.id - a.id).slice(0, 5);
            actividadRecienteContainer.innerHTML = '';

            recientes.forEach(cita => {
                const li = document.createElement('li');
                li.className = 'list-group-item';
                li.innerHTML = `<strong>${cita.nombreCliente}</strong> - Cita ${cita.estado === 'pendiente' ? 'creada' : 'actualizada a ' + cita.estado} para el ${formatearFechaParaVisualizacion(cita.fecha)}.`;
                actividadRecienteContainer.appendChild(li);
            });
        }

        /**
         * Obtiene las citas filtradas según los controles de la UI.
         * @returns {Array<object>} Un array con las citas que cumplen los criterios de filtro.
         */
        function obtenerCitasFiltradas() {
            const busquedaTermino = (filtroBusquedaInput.value || '').toLowerCase().trim();
            const estadosActivos = [...grupoFiltros.querySelectorAll('button.active')].map(btn => btn.dataset.estado);
            const todasActivo = estadosActivos.includes('todas');
            const fechaFiltro = filtroFechaInput.value;
            const mesFiltro = filtroMesSelect.value;
            const anioFiltro = filtroAnioSelect.value;
            const facturadoFiltro = filtroFacturadoInput.checked;

            return citas.filter(cita => {
                const coincideBusqueda = !busquedaTermino ||
                    (cita.nombreCliente && cita.nombreCliente.toLowerCase().includes(busquedaTermino)) ||
                    (cita.telefono && cita.telefono.toLowerCase().includes(busquedaTermino)) ||
                    (cita.marca && cita.marca.toLowerCase().includes(busquedaTermino)) ||
                    (cita.modelo && cita.modelo.toLowerCase().includes(busquedaTermino)) ||
                    (cita.anio && cita.anio.toString().includes(busquedaTermino));

                const coincideEstado = todasActivo || estadosActivos.includes(cita.estado);
                const coincideFecha = !fechaFiltro || cita.fecha === fechaFiltro;

                let coincideMes = true;
                if (mesFiltro) {
                    // Usar substring para evitar problemas de zona horaria
                    const mesCita = cita.fecha.substring(5, 7);
                    coincideMes = mesCita === mesFiltro;
                }

                let coincideAnio = true;
                if (anioFiltro) {
                    // Usar substring para evitar problemas de zona horaria
                    const anioCita = cita.fecha.substring(0, 4);
                    coincideAnio = anioCita === anioFiltro;
                }

                const coincideFacturado = !facturadoFiltro || cita.facturado;
                return coincideBusqueda && coincideEstado && coincideFecha && coincideMes && coincideAnio && coincideFacturado;
            });
        }

        /**
         * Renderiza la lista de clientes
         */
        function renderClientes() {
            if (!listaClientes) return;
            listaClientes.innerHTML = '';
            const filtro = (filtroClientes.value || '').toLowerCase();
            
            const clientesFiltrados = clientes.filter(c => 
                c.nombre.toLowerCase().includes(filtro) || 
                (c.telefono && c.telefono.includes(filtro))
            ).sort((a, b) => a.nombre.localeCompare(b.nombre));

            if (clientesFiltrados.length === 0) {
                listaClientes.innerHTML = '<div class="list-group-item text-center text-muted">No se encontraron clientes.</div>';
                return;
            }

            clientesFiltrados.forEach(cliente => {
                const item = document.createElement('a');
                item.href = '#';
                item.className = 'list-group-item list-group-item-action';
                item.innerHTML = `
                    <div class="d-flex w-100 justify-content-between">
                        <h6 class="mb-1">${cliente.nombre}</h6>
                    </div>
                    <p class="mb-1 text-muted">${cliente.telefono}</p>
                `;
                item.onclick = (e) => {
                    e.preventDefault();
                    mostrarHistorialCliente(cliente.id);
                    document.querySelectorAll('#listaClientes .list-group-item-action').forEach(el => el.classList.remove('active'));
                    item.classList.add('active');
                };
                listaClientes.appendChild(item);
            });
        }

        /**
         * Muestra el historial de un cliente seleccionado
         * @param {number} clienteId - El ID del cliente
         */
        function mostrarHistorialCliente(clienteId) {
            const cliente = clientes.find(c => c.id === clienteId);
            if (!cliente) return;

            placeholderCliente.style.display = 'none';
            historialClienteContainer.style.display = 'block';

            nombreClienteHistorial.textContent = cliente.nombre;
            telefonoClienteHistorial.textContent = cliente.telefono;

            const citasCliente = citas.filter(c => c.telefono === cliente.telefono).sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
            
            let historialHtml = '<table class="table table-sm table-hover"><thead><tr><th>Fecha</th><th>Servicio</th><th>Vehículo</th><th>Estado</th><th>Monto</th></tr></thead><tbody>';
            if (citasCliente.length === 0) {
                historialHtml += '<tr><td colspan="5" class="text-center">Este cliente no tiene citas registradas.</td></tr>';
            } else {
                citasCliente.forEach(cita => {
                    historialHtml += `<tr>
                        <td>${formatearFechaParaVisualizacion(cita.fecha)}</td>
                        <td>${cita.servicio === 'Otro' ? cita.otroServicio : cita.servicio}</td>
                        <td>${cita.marca} ${cita.modelo} (${cita.anio})</td>
                        <td><span class="${getBadgeClass(cita.estado)}">${cita.estado.replace('_', ' ')}</span></td>
                        <td>${cita.facturado ? formatearMonto(cita.monto) : 'N/A'}</td>
                    </tr>`;
                });
            }
            historialHtml += '</tbody></table>';
            tablaHistorialCliente.innerHTML = historialHtml;
        }

        /**
         * Renderiza el calendario de citas.
         */
        function renderCalendario() {
            if (!calendarioEl) return;

            // No renderizar el calendario si su contenedor no está visible.
            // Esto evita problemas de layout cuando la pestaña está oculta en la carga inicial.
            if (calendarioEl.offsetParent === null) {
                return;
            }

            // Transformar citas a eventos de FullCalendar
            const eventos = citas.map(cita => {
                const agente = agentes.find(a => a.id == cita.agente) || { nombre: 'N/A' };
                return {
                    id: cita.id,
                    title: `${cita.nombreCliente} (${cita.marca} ${cita.modelo})`,
                    start: `${cita.fecha}T${cita.hora}`,
                    backgroundColor: getEventColor(cita.estado),
                    borderColor: getEventColor(cita.estado),
                    extendedProps: {
                        agente: agente.nombre,
                        servicio: cita.servicio === 'Otro' ? cita.otroServicio : cita.servicio,
                        cliente: cita.nombreCliente,
                        vehiculo: `${cita.marca} ${cita.modelo}`
                    }
                };
            });

            // Destruir instancia anterior para evitar duplicados
            if (calendario) {
                calendario.destroy();
            }

            calendario = new FullCalendar.Calendar(calendarioEl, {
                locale: 'es',
                initialView: 'timeGridWeek', // Vista semanal es más útil para citas
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                },
                events: eventos,
                editable: true,
                nowIndicator: true, // Muestra la hora actual
                businessHours: { // Resalta el horario laboral
                    daysOfWeek: [ 1, 2, 3, 4, 5 ], // Lunes - Viernes
                    startTime: '08:00',
                    endTime: '17:00',
                },
                slotMinTime: '07:00:00', // Empezar el día a las 7am
                slotMaxTime: '18:00:00', // Terminar a las 6pm
                eventContent: function(arg) { // Renderizado personalizado de eventos
                    let html = `
                        <div class="fc-event-main-custom">
                            <div class="fc-event-time">${arg.timeText}</div>
                            <div class="fc-event-title-container">
                                <div class="fc-event-title-custom"><i class="fas fa-user me-1"></i>${arg.event.extendedProps.cliente}</div>
                                <div class="fc-event-desc"><i class="fas fa-car me-1"></i>${arg.event.extendedProps.vehiculo}</div>
                            </div>
                        </div>
                    `;
                    return { html: html };
                },
                eventClick: function(info) {
                    // Abrir el modal de edición al hacer clic en un evento
                    const citaId = parseInt(info.event.id);
                    abrirEditarModal(citaId);
                },
                eventDrop: function(info) {
                    const citaId = parseInt(info.event.id);
                    const index = citas.findIndex(c => c.id === citaId);

                    if (index !== -1) {
                        const nuevaFechaHora = info.event.start;
                        
                        // Formatear fecha a YYYY-MM-DD
                        const nuevaFecha = nuevaFechaHora.getFullYear() + '-' + 
                                           ('0' + (nuevaFechaHora.getMonth() + 1)).slice(-2) + '-' + 
                                           ('0' + nuevaFechaHora.getDate()).slice(-2);

                        // Formatear hora a HH:mm
                        const nuevaHora = ('0' + nuevaFechaHora.getHours()).slice(-2) + ':' + 
                                          ('0' + nuevaFechaHora.getMinutes()).slice(-2);

                        citas[index].fecha = nuevaFecha;
                        // Si se arrastra a una vista de día completo (como el mes), la hora se resetea a 00:00.
                        // En ese caso, conservamos la hora original de la cita.
                        // Solo actualizamos la hora si la nueva hora no es medianoche.
                        if (nuevaHora !== '00:00') {
                            citas[index].hora = nuevaHora;
                        }

                        guardarCitas();
                        renderCitas(); // Re-renderiza todo para mantener la consistencia
                        
                        mostrarMensaje(`La cita de ${citas[index].nombreCliente} ha sido reagendada.`, 'info');
                    } else {
                        info.revert();
                        mostrarMensaje('Hubo un error al actualizar la cita.', 'danger');
                    }
                }
            });

            calendario.render();
        }

        /**
         * Sincroniza la vista del calendario con los filtros de fecha activos.
         */
        function sincronizarCalendarioConFiltros() {
            if (!calendario) return;

            const fechaFiltro = filtroFechaInput.value;
            const mesFiltro = filtroMesSelect.value;
            const anioFiltro = filtroAnioSelect.value;

            // Solo actuar si hay un filtro de fecha
            if (fechaFiltro) {
                // Se añade T12:00 para evitar que la fecha se interprete como UTC a medianoche,
                // lo que causaría que se muestre el día anterior en algunas zonas horarias.
                calendario.gotoDate(fechaFiltro + 'T12:00:00');
                calendario.changeView('timeGridDay');
            } else if (mesFiltro && anioFiltro) {
                calendario.gotoDate(`${anioFiltro}-${mesFiltro}-01`);
                calendario.changeView('dayGridMonth');
            } else if (anioFiltro) {
                calendario.gotoDate(`${anioFiltro}-01-01`);
                calendario.changeView('dayGridMonth');
            }
        }

        /**
         * Actualiza el panel de resumen
         */
        function actualizarResumen() {
            const hoy = new Date().toISOString().split('T')[0];
            
            const totalCitas = citas.length;
            const citasHoy = citas.filter(c => c.fecha === hoy).length;
            const citasPendientes = citas.filter(c => c.estado === 'pendiente').length;
            const montoTotal = citas.filter(c => c.facturado).reduce((sum, c) => sum + (c.monto || 0), 0);
            
            if (document.getElementById('resumenTotal')) {
                document.getElementById('resumenTotal').textContent = totalCitas;
                document.getElementById('resumenHoy').textContent = citasHoy;
                document.getElementById('resumenPendientes').textContent = citasPendientes;
                document.getElementById('resumenFacturado').textContent = formatearMonto(montoTotal);
            }
        }

        /**
         * Obtiene las citas filtradas específicamente para los reportes.
         * @returns {Array<object>} Un array con las citas que cumplen los criterios de filtro de reportes.
         */
        function obtenerCitasFiltradasParaReportes() {
            const fechaInicio = filtroReporteFechaInicioInput.value;
            const fechaFin = filtroReporteFechaFinInput.value;
            const agenteId = filtroReporteAgenteSelect.value;
            const servicioFiltro = filtroReporteServicioSelect.value;
            const estadosActivos = [...grupoFiltrosReportes.querySelectorAll('button.active')].map(btn => btn.dataset.estado);
            const todasActivo = estadosActivos.includes('todas');
            const facturadoFiltro = filtroReporteFacturadoInput.checked;

            return citas.filter(cita => {
                const citaFecha = new Date(cita.fecha + 'T12:00:00');

                // Filtro por rango de fechas
                if (fechaInicio && citaFecha < new Date(fechaInicio + 'T12:00:00')) return false;
                if (fechaFin && citaFecha > new Date(fechaFin + 'T12:00:00')) return false;

                // Filtro por agente
                if (agenteId && cita.agente != agenteId) return false;

                // Filtro por servicio
                if (servicioFiltro) {
                    const servicioCita = cita.servicio === 'Otro' ? cita.otroServicio : cita.servicio;
                    if (servicioCita !== servicioFiltro) return false;
                }

                // Filtro por estado
                if (!todasActivo && !estadosActivos.includes(cita.estado)) return false;

                // Filtro por facturado
                if (facturadoFiltro && !cita.facturado) return false;

                return true;
            });
        }

        /**
         * Genera el gráfico de distribución por estado
         */
        function generarGraficoEstados(citasParaReportes) {
            const ctx = document.getElementById('estadoChart');
            if (!ctx) return;
            
            const estados = ['pendiente', 'recibido', 'completada', 'reagendada', 'no_asistio', 'cancelada'];
            const conteoEstados = {};
            
            estados.forEach(estado => {
                conteoEstados[estado] = citasParaReportes.filter(c => c.estado === estado).length;
            });
            
            // Destruir gráfico anterior si existe
            if (estadoChart) {
                estadoChart.destroy();
            }
            
            estadoChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: ['Pendientes', 'Recibidos', 'Completadas', 'Reagendadas', 'No Asistieron', 'Canceladas'],
                    datasets: [{
                        data: Object.values(conteoEstados),
                        backgroundColor: [
                            '#6c757d', // pendiente - gris
                            '#17a2b8', // recibido - azul claro
                            '#28a745', // completada - verde
                            '#ffc107', // reagendada - amarillo
                            '#dc3545', // no_asistio - rojo
                            '#343a40'  // cancelada - negro
                        ]
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'bottom'
                        }
                    }
                }
            });
        }

        /**
         * Genera reportes y gráficos
         */
        function generarReportes() {
            const citasParaReportes = obtenerCitasFiltradasParaReportes();
            // Generar gráfico de estados
            generarGraficoEstados(citasParaReportes);
            // Generar gráfico de facturación mensual
            generarGraficoFacturacion(citasParaReportes);
            // Generar tabla de reportes por agente
            generarTablaReportes(citasParaReportes);
        }

        /**
         * Genera el gráfico de facturación mensual
         */
        function generarGraficoFacturacion(citasParaReportes) {
            const ctx = document.getElementById('facturacionChart');
            if (!ctx) return;
            
            // Agrupar facturación por mes
            const facturacionMensual = {};
            
            citasParaReportes.filter(c => c.facturado).forEach(cita => {
                // Se añade T12:00 para forzar la interpretación en la zona horaria local
                const fecha = new Date(cita.fecha + 'T12:00:00');
                const mes = fecha.getMonth() + 1;
                const año = fecha.getFullYear();
                const clave = `${año}-${mes.toString().padStart(2, '0')}`;
                
                if (!facturacionMensual[clave]) {
                    facturacionMensual[clave] = 0;
                }
                
                facturacionMensual[clave] += cita.monto || 0;
            });
            
            // Ordenar por fecha
            const mesesOrdenados = Object.keys(facturacionMensual).sort();
            const nombresMeses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
            const etiquetas = mesesOrdenados.map(clave => {
                const partes = clave.split('-');
                return `${nombresMeses[parseInt(partes[1]) - 1]} ${partes[0]}`;
            });
            
            const valores = mesesOrdenados.map(clave => facturacionMensual[clave]);
            
            // Destruir gráfico anterior si existe
            if (facturacionChart) {
                facturacionChart.destroy();
            }
            
            facturacionChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: etiquetas,
                    datasets: [{
                        label: 'Facturación Mensual',
                        data: valores,
                        backgroundColor: '#3498db'
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'bottom'
                        },
                        title: {
                            display: true,
                            text: 'Facturación Mensual'
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                callback: function(value) {
                                    return formatearMonto(value);
                                }
                            }
                        }
                    }
                }
            });
        }

        /**
         * Genera la tabla de reportes por agente
         */
        function generarTablaReportes(citasParaReportes) {
            const tablaReportes = document.getElementById('tablaReportes');
            if (!tablaReportes) return;
            
            tablaReportes.innerHTML = '';
            
            // Agrupar citas por agente
            const reportesAgentes = {};
            
            agentes.forEach(agente => {
                reportesAgentes[agente.id] = {
                    nombre: agente.nombre,
                    total: 0,
                    completadas: 0,
                    facturado: 0
                };
            });
            
            citasParaReportes.forEach(cita => {
                if (cita.agente && reportesAgentes[cita.agente]) {
                    reportesAgentes[cita.agente].total++;
                    
                    if (cita.estado === 'completada') {
                        reportesAgentes[cita.agente].completadas++;
                    }
                    
                    if (cita.facturado) {
                        reportesAgentes[cita.agente].facturado += cita.monto || 0;
                    }
                }
            });
            
            // Generar filas de la tabla
            for (const [agenteId, datos] of Object.entries(reportesAgentes)) {
                const efectividad = datos.total > 0 ? (datos.completadas / datos.total) * 100 : 0;
                
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${datos.nombre}</td>
                    <td>${datos.total}</td>
                    <td>${datos.completadas}</td>
                    <td>${formatearMonto(datos.facturado)}</td>
                    <td>${efectividad.toFixed(1)}%</td>
                `;
                tablaReportes.appendChild(tr);
            }
        }

        /**
         * Formatea una fecha para visualización (DD/MM/YYYY)
         * @param {string} fechaStr - Fecha en formato YYYY-MM-DD
         * @returns {string} Fecha formateada
         */
        function formatearFechaParaVisualizacion(fechaStr) {
            if (!fechaStr) return '';
            
            try {
                const partes = fechaStr.split('-');
                if (partes.length === 3) {
                    return `${partes[2]}/${partes[1]}/${partes[0]}`;
                }
                return fechaStr;
            } catch (e) {
                return fechaStr;
            }
        }

        /**
         * Normaliza una fecha a formato YYYY-MM-DD desde varios formatos posibles.
         * @param {string | Date} fechaInput - La fecha a normalizar.
         * @returns {string} Fecha en formato YYYY-MM-DD.
         */
        function normalizarFecha(fechaInput) {
            if (!fechaInput) return new Date().toISOString().split('T')[0];
            
            // Si ya es un objeto Date, lo formateamos
            if (fechaInput instanceof Date) {
                return fechaInput.toISOString().split('T')[0];
            }

            try {
                let fecha;
                if (String(fechaInput).includes('/')) {
                    const partes = fechaInput.split('/');
                    // Asumimos DD/MM/YYYY
                    if (partes.length === 3) {
                        // Asegurarse que el año tenga 4 dígitos
                        const anio = partes[2].length === 2 ? `20${partes[2]}` : partes[2];
                        // Se crea la fecha usando los componentes para forzar la zona horaria local
                        // y evitar la interpretación como UTC que causa el desfase de un día.
                        fecha = new Date(anio, partes[1] - 1, partes[0]);
                    }
                } else {
                    // Para YYYY-MM-DD, que se interpreta como UTC.
                    // Esto causa el problema del "retraso" de un día en zonas horarias detrás de UTC.
                    // Solución: Dividimos la fecha y la reconstruimos para forzar la zona horaria local.
                    const partes = String(fechaInput).split('T')[0].split('-');
                    if (partes.length === 3) {
                        // new Date(año, mes - 1, día) se interpreta en la zona horaria local.
                        fecha = new Date(partes[0], partes[1] - 1, partes[2]);
                    } else {
                        fecha = new Date(fechaInput); // Fallback para otros formatos
                    }
                }

                if (isNaN(fecha.getTime())) return new Date().toISOString().split('T')[0];

                const anio = fecha.getFullYear();
                const mes = String(fecha.getMonth() + 1).padStart(2, '0');
                const dia = String(fecha.getDate()).padStart(2, '0');
                
                return `${anio}-${mes}-${dia}`;

            } catch (e) {
                console.error("Error normalizando fecha:", fechaInput, e);
                return new Date().toISOString().split('T')[0];
            }
        }

        /**
         * Normaliza una hora a formato HH:mm.
         * @param {string} horaInput - La hora a normalizar.
         * @returns {string} Hora en formato HH:mm.
         */
        function normalizarHora(horaInput) {
            if (!horaInput) return '08:00';
            
            const horaStr = String(horaInput).toLowerCase();
            const match = horaStr.match(/(\d{1,2}):?(\d{2})?/);
            
            if (match) {
                let horas = parseInt(match[1], 10);
                const minutos = match[2] ? parseInt(match[2], 10) : 0;
                if (horaStr.includes('pm') && horas < 12) horas += 12;
                if (horaStr.includes('am') && horas === 12) horas = 0;
                return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}`;
            }
            return '08:00';
        }

        /**
         * Agrega una nueva cita desde el formulario.
         * @param {Event} event - El evento de envío del formulario.
         */
        function agregarCita(event) {
            event.preventDefault();
            const nuevoId = citas.length > 0 ? Math.max(...citas.map(c => c.id)) + 1 : 1;
            const servicio = servicioSelect.value;
            const nuevoServicio = servicio === 'Otro' ? otroServicioInput.value : servicio;

            const nuevaCita = {
                id: nuevoId,
                nombreCliente: document.getElementById('nombreCliente').value,
                telefono: document.getElementById('telefono').value,
                marca: document.getElementById('marca').value,
                modelo: document.getElementById('modelo').value,
                anio: parseInt(document.getElementById('anio').value),
                fecha: document.getElementById('fecha').value,
                hora: document.getElementById('hora').value,
                servicio: nuevoServicio,
                notas: document.getElementById('notas').value,
                agente: document.getElementById('agente').value,
                estado: "pendiente",
                facturado: false,
                monto: 0,
                tieneCotizacion: "no_aplica",
                motivoCotizacion: "",
                otroServicio: servicio === 'Otro' ? otroServicioInput.value : "",
                enCamino: false,
                esPromocion: document.getElementById('esPromocion').checked,
                precioRegular: parsearMonto(document.getElementById('precioRegular').value),
                precioPromocional: parsearMonto(document.getElementById('precioPromocional').value)
            };

            citas.push(nuevaCita);
            guardarCitas();
            renderCitas();
            citaForm.reset();
            mostrarMensaje("Cita agregada con éxito.", "success");
            
            // Cambiar a la pestaña de gestión de citas
            document.getElementById('pills-citas-tab').click();
        }

        /**
         * Abre el modal de confirmación para eliminar una cita.
         * @param {number} id - El ID de la cita a eliminar.
         */
        function abrirConfirmacionEliminar(id) {
            citaIdAEliminar = id;
            const confirmarEliminarModal = new bootstrap.Modal(confirmarEliminarModalEl);
            confirmarEliminarModal.show();
        }

        /**
         * Elimina una cita de la lista.
         */
        function eliminarCita() {
            if (citaIdAEliminar !== null) {
                citas = citas.filter(cita => cita.id !== citaIdAEliminar);
                guardarCitas();
                renderCitas();
                mostrarMensaje("Cita eliminada correctamente.", "danger");
                bootstrap.Modal.getInstance(confirmarEliminarModalEl).hide();
                citaIdAEliminar = null;
            }
        }

        /**
         * Marca o desmarca una cita como 'en camino'.
         * @param {number} id - El ID de la cita.
         */
        function marcarEnCamino(id) {
            const index = citas.findIndex(c => c.id === id);
            if (index !== -1) {
                citas[index].enCamino = !citas[index].enCamino;
                guardarCitas();
                renderCitas();
                const mensaje = citas[index].enCamino 
                    ? `Cita de ${citas[index].nombreCliente} marcada como 'En Camino'.`
                    : `Se ha desmarcado 'En Camino' para la cita de ${citas[index].nombreCliente}.`;
                mostrarMensaje(mensaje, citas[index].enCamino ? 'info' : 'warning');
            }
        }

        /**
         * Abre el modal de edición con los datos de una cita.
         * @param {number} id - El ID de la cita a editar.
         */
        function abrirEditarModal(id) {
            const cita = citas.find(c => c.id === id);
            if (cita) {
                editarIdInput.value = cita.id;
                editarNombreClienteInput.value = cita.nombreCliente;
                editarTelefonoInput.value = cita.telefono;
                editarMarcaInput.value = cita.marca;
                editarModeloInput.value = cita.modelo;
                editarAnioInput.value = cita.anio;
                editarFechaInput.value = cita.fecha;
                editarHoraInput.value = cita.hora;
                editarServicioSelect.value = cita.servicio === "Otro" ? "Otro" : cita.servicio;
                if (cita.servicio === "Otro") {
                    editarOtroServicioContainer.style.display = '';
                    editarOtroServicioInput.value = cita.otroServicio || '';
                } else {
                    editarOtroServicioContainer.style.display = 'none';
                    editarOtroServicioInput.value = '';
                }
                editarNotasInput.value = cita.notas;
                editarAgenteInput.value = cita.agente || '';
                editarEstadoSelect.value = cita.estado;
                editarFacturadoInput.checked = cita.facturado;
                editarMontoInput.value = cita.facturado ? cita.monto : '';
                editarTieneCotizacionSelect.value = cita.tieneCotizacion;
                if (cita.tieneCotizacion === "no") {
                    editarMotivoCotizacionContainer.style.display = '';
                    editarMotivoCotizacionInput.value = cita.motivoCotizacion || '';
                } else {
                    editarMotivoCotizacionContainer.style.display = 'none';
                    editarMotivoCotizacionInput.value = '';
                }
                
                editarEsPromocionCheck.checked = cita.esPromocion || false;
                editarPromoContainer.style.display = cita.esPromocion ? '' : 'none';
                if (cita.esPromocion) {
                    editarPrecioRegularInput.value = cita.precioRegular || '';
                    editarPrecioPromocionalInput.value = cita.precioPromocional || '';
                }


                const editarCitaModal = new bootstrap.Modal(editarCitaModalEl);
                editarCitaModal.show();
            }
        }

        /**
         * Guarda los cambios de una cita editada.
         */
        function guardarEdicion() {
            const id = parseInt(editarIdInput.value);
            const index = citas.findIndex(c => c.id === id);
            if (index !== -1) {
                const servicio = editarServicioSelect.value;
                const nuevoServicio = servicio === 'Otro' ? editarOtroServicioInput.value : servicio;
                const tieneCotizacion = editarTieneCotizacionSelect.value;
                const motivoCotizacion = tieneCotizacion === "no" ? editarMotivoCotizacionInput.value : "";

                citas[index] = {
                    id: id,
                    nombreCliente: editarNombreClienteInput.value,
                    telefono: editarTelefonoInput.value,
                    marca: editarMarcaInput.value,
                    modelo: editarModeloInput.value,
                    anio: parseInt(editarAnioInput.value),
                    fecha: editarFechaInput.value,
                    hora: editarHoraInput.value,
                    servicio: nuevoServicio,
                    otroServicio: servicio === 'Otro' ? editarOtroServicioInput.value : "",
                    notas: editarNotasInput.value,
                    agente: editarAgenteInput.value,
                    estado: editarEstadoSelect.value,
                    facturado: editarFacturadoInput.checked,
                    monto: editarFacturadoInput.checked ? parsearMonto(editarMontoInput.value) : 0,
                    tieneCotizacion: tieneCotizacion,
                    motivoCotizacion: motivoCotizacion,
                    enCamino: citas[index].enCamino, // Preservar estado 'en camino'
                    esPromocion: editarEsPromocionCheck.checked,
                    precioRegular: parsearMonto(editarPrecioRegularInput.value),
                    precioPromocional: parsearMonto(editarPrecioPromocionalInput.value)
                };
                guardarCitas();
                renderCitas();
                bootstrap.Modal.getInstance(editarCitaModalEl).hide();
                mostrarMensaje("Cita editada con éxito.", "warning");
            }
        }

        /**
         * Abre el modal para ver e imprimir el cupón.
         * @param {number} id - El ID de la cita para el cupón.
         */
        function abrirCuponModal(id) {
            const cita = citas.find(c => c.id === id);
            if (cita) {
                const servicio = cita.servicio === 'Otro' ? (cita.otroServicio || cita.servicio) : cita.servicio;
                const agente = agentes.find(a => a.id == cita.agente) || { nombre: 'N/A' };

                // Lógica para la sección de oferta/precio
                let offerHtml = '';
                if (servicio === 'Chequeo libre de costo') {
                    const precioRegularCortesia = 1000; // Precio de ejemplo para el chequeo
                    offerHtml = `
                        <div class="cupon-island cupon-offer">
                            <h6 class="text-success"><i class="fas fa-star me-2"></i>Oferta Especial</h6>
                            <div>Precio Regular: <span class="precio-original">${formatearMonto(precioRegularCortesia)}</span></div>
                            <div class="precio-cortesia">GRATIS</div>
                            <small class="text-muted">¡Servicio de cortesía por ser nuestro cliente!</small>
                        </div>
                    `;
                } else if (cita.esPromocion && cita.precioPromocional > 0) {
                    offerHtml = `
                        <div class="cupon-island cupon-offer">
                            <h6 class="text-success"><i class="fas fa-tag me-2"></i>Precio Promocional</h6>
                            <div>Precio Regular: <span class="precio-original">${formatearMonto(cita.precioRegular)}</span></div>
                            <div class="precio-promocional">${formatearMonto(cita.precioPromocional)}</div>
                            <small class="text-muted">¡Válido solo con este cupón!</small>
                        </div>
                    `;
                } else if (cita.facturado && cita.monto > 0) {
                     offerHtml = `
                        <div class="cupon-island">
                            <h6><i class="fas fa-file-invoice-dollar me-2"></i>Monto Facturado</h6>
                            <div class="text-center precio-promocional">${formatearMonto(cita.monto)}</div>
                        </div>
                    `;
                }

                // Lógica para las notas
                const notasHtml = cita.notas ? `
                    <div class="cupon-island">
                        <h6><i class="fas fa-sticky-note me-2"></i>Notas Adicionales</h6>
                        <p>${cita.notas}</p>
                    </div>
                ` : '';

                cuponContent.innerHTML = `
                    <div class="cupon-container">
                        <div class="cupon-banner">
                            <img src="${configuracion.logo}" alt="Logo">
                            <h3>${configuracion.nombreEmpresa}</h3>
                        </div>
                        <div class="cupon-body">
                            <div class="cupon-island">
                                <h6><i class="fas fa-user me-2"></i>Datos del Cliente</h6>
                                <p><strong>Nombre:</strong> ${cita.nombreCliente}</p>
                                <p><strong>Vehículo:</strong> ${cita.marca} ${cita.modelo} (${cita.anio})</p>
                            </div>
                            <div class="cupon-island">
                                <h6><i class="fas fa-calendar-alt me-2"></i>Detalles de la Cita</h6>
                                <p><strong>Fecha y Hora:</strong> ${formatearFechaParaVisualizacion(cita.fecha)} - ${cita.hora}</p>
                                <p><strong>Servicio:</strong> ${servicio}</p>
                                <p><strong>Agente:</strong> ${agente.nombre}</p>
                            </div>
                            ${offerHtml}
                            ${notasHtml}
                        </div>
                        <div class="cupon-footer">
                            <div class="cupon-footer-text">
                                <div>Válido solo para la fecha y hora indicadas.</div>
                                <div>${configuracion.direccion}</div>
                            </div>
                            <div class="cupon-qr">
                                <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(configuracion.qrUrl || `CitaID-${cita.id}`)}" alt="QR Code">
                            </div>
                        </div>
                    </div>
                `;
                const cuponModal = new bootstrap.Modal(cuponModalEl);
                cuponModal.show();
            }
        }

        /**
         * Genera un enlace de WhatsApp con un mensaje predefinido.
         * @param {object} cita - La cita para la cual generar el enlace.
         * @returns {string} La URL de WhatsApp.
         */
        function generarLinkWhatsApp(cita) {
            const numero = cita.telefono.replace(/\D/g, ''); // Limpiar el número de teléfono
            const mensaje = `¡Hola ${cita.nombreCliente}! Te recordamos tu cita en ${configuracion.nombreEmpresa} para tu ${cita.marca} ${cita.modelo} el día ${formatearFechaParaVisualizacion(cita.fecha)} a las ${cita.hora}. ¡Te esperamos!`;
            
            // Asegurarse de que el número tenga el código de país si es necesario.
            // Este ejemplo asume números locales de RD. Ajustar si es necesario.
            const numeroConCodigo = numero.startsWith('1') ? numero : `1${numero}`;

            return `https://wa.me/${numeroConCodigo}?text=${encodeURIComponent(mensaje)}`;
        }

        /**
         * Imprime el contenido del cupón.
         */
        function imprimirCupon() {
            const contenido = cuponContent.innerHTML;
            const ventanaImpresion = window.open('', '', 'height=600,width=800');
            ventanaImpresion.document.write('<html><head><title>Cupón de Servicio</title>');
            ventanaImpresion.document.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">');
            ventanaImpresion.document.write('</head><body>');
            ventanaImpresion.document.write(contenido);
            ventanaImpresion.document.write('</body></html>');
            ventanaImpresion.document.close();
            ventanaImpresion.onload = function() {
                ventanaImpresion.print();
            };
        }

        /**
         * Genera un texto copiable con las citas del día agrupadas por agente
         */
        function generarTextoParaCopiar() {
            // Obtener la fecha seleccionada en el filtro o usar la de hoy
            const fechaFiltro = filtroFechaInput.value;
            let fechaParaMostrar = 'mañana';
            
            if (fechaFiltro) {
                // Se añade T12:00 para forzar la interpretación en la zona horaria local
                const fecha = new Date(fechaFiltro + 'T12:00:00');
                fechaParaMostrar = fecha.toLocaleDateString('es-ES', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                });
            }
            
            // Obtener citas filtradas
            const citasFiltradas = obtenerCitasFiltradas();
            
            // Agrupar por agente
            const citasPorAgente = {};
            citasFiltradas.forEach(cita => {
                const agenteId = cita.agente || 'sin-asignar';
                const agente = agentes.find(a => a.id == agenteId) || { nombre: 'Sin asignar' };
                
                if (!citasPorAgente[agente.nombre]) {
                    citasPorAgente[agente.nombre] = [];
                }
                citasPorAgente[agente.nombre].push(cita);
            });
            
            // Generar texto
            let texto = `Proyección para ${fechaParaMostrar}\n\n`;
            
            for (const [agente, citasAgente] of Object.entries(citasPorAgente)) {
                texto += `*${configuracion.nombreEmpresa} / ${agente}*\n`;
                
                citasAgente.forEach(cita => {
                    texto += `- ${cita.marca} ${cita.modelo} ${cita.anio}\n`;
                });
                
                texto += '\n';
            }
            
            return texto;
        }

        /**
         * Copia el texto al portapapeles
         * @param {string} texto - Texto a copiar
         */
        function copiarAlPortapapeles(texto) {
            navigator.clipboard.writeText(texto).then(() => {
                mostrarMensaje("Lista copiada al portapapeles", "success");
            }).catch(err => {
                console.error('Error al copiar: ', err);
                // Fallback para navegadores más antiguos
                const textArea = document.createElement('textarea');
                textArea.value = texto;
                document.body.appendChild(textArea);
                textArea.select();
                try {
                    document.execCommand('copy');
                    mostrarMensaje("Lista copiada al portapapeles", "success");
                } catch (e) {
                    mostrarMensaje("Error al copiar al portapapeles", "danger");
                }
                document.body.removeChild(textArea);
            });
        }

        /**
         * Muestra el modal para seleccionar agente
         */
        function mostrarModalAgentes() {
            listaAgentes.innerHTML = '';
            
            // Filtrar agentes si hay texto de búsqueda
            const filtro = filtroAgente.value.toLowerCase();
            const agentesFiltrados = filtro 
                ? agentes.filter(agente => agente.nombre.toLowerCase().includes(filtro))
                : agentes;
            
            if (agentesFiltrados.length === 0) {
                listaAgentes.innerHTML = '<div class="list-group-item text-center">No hay agentes disponibles</div>';
                return;
            }
            
            agentesFiltrados.forEach(agente => {
                const item = document.createElement('button');
                item.type = 'button';
                item.className = 'list-group-item list-group-item-action agente-item';
                item.textContent = agente.nombre;
                item.addEventListener('click', () => {
                    // Deseleccionar cualquier item previamente seleccionado
                    document.querySelectorAll('.agente-item').forEach(i => i.classList.remove('active'));
                    // Seleccionar este item
                    item.classList.add('active');
                    agenteSeleccionado = agente;
                });
                listaAgentes.appendChild(item);
            });
            
            seleccionarAgenteModal.show();
        }

        /**
         * Procesa un archivo Excel/CSV y extrae los datos
         * @param {File} file - Archivo a procesar
         */
        function procesarArchivoExcel(file) {
            const reader = new FileReader();
            
            reader.onload = function(e) {
                try {
                    const data = new Uint8Array(e.target.result);
                    const workbook = XLSX.read(data, { type: 'array' });
                    
                    // Obtener la primera hoja
                    const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
                    
                    // Convertir a JSON
                    const jsonData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });
                    
                    if (jsonData.length < 2) {
                        mostrarMensaje("El archivo no contiene datos válidos.", "danger");
                        return;
                    }
                    
                    // Obtener encabezados
                    const headers = jsonData[0].map(h => h ? h.toString().toLowerCase().trim() : '');
                    
                    // Procesar filas de datos
                    datosImportados = [];
                    
                    for (let i = 1; i < jsonData.length; i++) {
                        const row = jsonData[i];
                        if (!row || row.length === 0) continue;
                        
                        const nombre = row[headers.indexOf('nombre')] || '';
                        const telefono = row[headers.indexOf('whatsapp')] || row[headers.indexOf('teléfono')] || '';
                        const marca = row[headers.indexOf('marca')] || '';
                        const modelo = row[headers.indexOf('modelo')] || '';
                        const anio = row[headers.indexOf('año')] || row[headers.indexOf('ano')] || '';
                        let fecha = row[headers.indexOf('cita')] || '';
                        const hora = row[headers.indexOf('hora')] || '08:00 a. m.';
                        const servicio = row[headers.indexOf('función')] || row[headers.indexOf('servicio')] || '';
                        const estado = row[headers.indexOf('estado')] || '';
                        const notas = row[headers.indexOf('notas')] || row[headers.indexOf('observaciones')] || '';
                        const facturado = row[headers.indexOf('facturación')] || '';
                        const monto = row[headers.indexOf('monto')] || row[headers.indexOf('monto3')] || 0;
                        const agente = row[headers.indexOf('agente')] || '';
                        
                        // Solo procesar filas con datos básicos
                        if (nombre && telefono) {
                            // Corregir formato de fecha si está habilitado
                            if (document.getElementById('corregirFechas').checked) {
                                fecha = convertirFechaExcel(fecha);
                            } else {
                                fecha = formatearFecha(fecha);
                            }
                            
                            datosImportados.push({
                                nombre,
                                telefono: telefono.toString(),
                                marca: marca.toString(),
                                modelo: modelo.toString(),
                                anio: anio.toString(),
                                fecha: fecha,
                                hora: convertirHora(hora),
                                servicio,
                                estado: convertirEstado(estado),
                                notas,
                                agente,
                                facturado: facturado.toString().toLowerCase().includes('facturado'),
                                monto: parsearMonto(monto)
                            });
                        }
                    }
                    
                    // Mostrar vista previa
                    mostrarVistaPrevia();
                    
                } catch (error) {
                    console.error("Error al procesar el archivo:", error);
                    mostrarMensaje("Error al procesar el archivo. Asegúrate de que es un formato válido.", "danger");
                }
            };
            
            reader.onerror = function() {
                mostrarMensaje("Error al leer el archivo.", "danger");
            };
            
            reader.readAsArrayBuffer(file);
        }

        /**
         * Muestra una vista previa de los datos importados
         */
        function mostrarVistaPrevia() {
            vistaPreviaDatos.innerHTML = '';
            
            if (datosImportados.length === 0) {
                vistaPreviaDatos.innerHTML = '<tr><td colspan="9" class="text-center">No hay datos válidos para importar</td></tr>';
                return;
            }
            
            // Mostrar máximo 10 registros en la vista previa
            const previewData = datosImportados.slice(0, 10);
            
            previewData.forEach(dato => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${dato.nombre}</td>
                    <td>${dato.telefono}</td>
                    <td>${dato.marca}</td>
                    <td>${dato.modelo}</td>
                    <td>${dato.anio}</td>
                    <td>${formatearFechaParaVisualizacion(dato.fecha)}</td>
                    <td>${dato.hora}</td>
                    <td>${dato.servicio}</td>
                    <td><span class="badge ${getBadgeClass(dato.estado)}">${dato.estado}</span></td>
                `;
                vistaPreviaDatos.appendChild(tr);
            });
            
            if (datosImportados.length > 10) {
                const tr = document.createElement('tr');
                tr.innerHTML = `<td colspan="9" class="text-center">... y ${datosImportados.length - 10} registros más</td>`;
                vistaPreviaDatos.appendChild(tr);
            }
        }

        /**
         * Confirma la importación de datos desde Excel
         */
        function confirmarImportacion() {
            if (datosImportados.length === 0) {
                mostrarMensaje("No hay datos para importar.", "warning");
                return;
            }
            
            const sobrescribir = document.getElementById('sobrescribirDatos').checked;
            
            if (sobrescribir) {
                citas = [];
            }
            
            // Agregar los datos importados
            let contador = 0;
            const nuevoId = citas.length > 0 ? Math.max(...citas.map(c => c.id)) + 1 : 1;
            
            datosImportados.forEach((dato, index) => {
                const id = nuevoId + index;
                
                // Buscar si el agente existe
                let agenteId = '';
                if (dato.agente) {
                    const agenteExistente = agentes.find(a => a.nombre.toLowerCase() === dato.agente.toLowerCase());
                    if (agenteExistente) {
                        agenteId = agenteExistente.id;
                    } else {
                        // Crear un nuevo agente
                        const nuevoAgenteId = agentes.length > 0 ? Math.max(...agentes.map(a => a.id)) + 1 : 1;
                        agentes.push({
                            id: nuevoAgenteId,
                            nombre: dato.agente,
                            email: '',
                            telefono: '',
                            activo: true
                        });
                        agenteId = nuevoAgenteId;
                    }
                }
                
                citas.push({
                    id: id,
                    nombreCliente: dato.nombre,
                    telefono: dato.telefono,
                    marca: dato.marca,
                    modelo: dato.modelo,
                    anio: dato.anio,
                    fecha: dato.fecha,
                    hora: dato.hora,
                    servicio: dato.servicio,
                    notas: dato.notas,
                    agente: agenteId,
                    estado: dato.estado,
                    facturado: dato.facturado,
                    monto: dato.monto,
                    tieneCotizacion: "no_aplica",
                    motivoCotizacion: "",
                    otroServicio: "",
                    enCamino: false
                });
                
                contador++;
            });
            
            guardarCitas();
            guardarAgentes();
            renderCitas();
            importarExcelModal.hide();
            mostrarMensaje(`Se importaron ${contador} citas correctamente.`, "success");
        }

        /**
         * Exporta los datos de la tabla a un archivo CSV (Excel) con el formato solicitado,
         * incluyendo la codificación correcta y los saltos de línea entre citas.
         */
        function exportarAExcel() {
            // Añadir el Byte Order Mark (BOM) para asegurar la compatibilidad con tildes y ñ en Excel.
            let csv = "\ufeff";

            // Cabeceras solicitadas en el formato de la imagen
            const headers = "Monto,Observaciones,Nombre,Correo,Whatsapp,Marca,Modelo,Trim,Región,Año,Cita,Combustible,Sucursal,Función,Estado,Facturación,Monto,Agente";
            csv += headers + "\n";

            // Usar las citas filtradas actualmente en la vista
            const citasParaExportar = obtenerCitasFiltradas();

            citasParaExportar.forEach(cita => {
                const servicio = cita.servicio === 'Otro' ? cita.otroServicio : cita.servicio;
                // Obtener nombre del agente
                const agente = agentes.find(a => a.id == cita.agente) || { nombre: '' };
                
                // Los campos no disponibles se marcan como "N/A"
                csv += `"${cita.facturado ? formatearMonto(cita.monto).replace('RD$', '').replace('$', '').replace('€', '').trim() : 'N/A'}",` + // Primer "Monto" de la imagen
                       `"${(cita.notas || '').replace(/"/g, '""')}",` + // Observaciones, escapando comillas
                       `"${(cita.nombreCliente || '').replace(/"/g, '""')}",` + // Nombre, escapando comillas
                       `"N/A",` + // Correo
                       `"${(cita.telefono || '').replace(/"/g, '""')}",` + // Whatsapp, escapando comillas
                       `"${(cita.marca || '').replace(/"/g, '""')}",` +      
                       `"${(cita.modelo || '').replace(/"/g, '""')}",` + // Modelo, escapando comillas
                       `"N/A",` + // Trim
                       `"N/A",` + // Región
                       `"${cita.anio}",` + // Año
                       `"${formatearFechaParaVisualizacion(cita.fecha)} ${cita.hora}",` + // Cita
                       `"N/A",` + // Combustible
                       `"${configuracion.sucursal}",` + // Sucursal
                       `"${(servicio || '').replace(/"/g, '""')}",` + // Función, escapando comillas
                       `"${cita.estado.replace('_', ' ')}",` + // Estado
                       `"${cita.facturado ? 'Sí' : 'No'}",` + // Facturación
                       `"${cita.facturado ? formatearMonto(cita.monto).replace('RD$', '').replace('$', '').replace('€', '').trim() : '0'}",` + // Monto
                       `"${agente.nombre || ''}"` + // Agente
                       `\n`; // Fin de la fila de datos

                // Añadir una fila vacía para el "salto" solicitado
        
            });

            const blob = new Blob([csv], {
                type: 'text/csv;charset=utf-8;'
            });
            const link = document.createElement("a");
            const url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", "citas_checkengine.csv");
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        /**
         * Guarda las citas actuales en un archivo JSON para respaldo.
         */
        function guardarManual() {
            const backupData = {
                version: "1.1",
                createdAt: new Date().toISOString(),
                citas,
                clientes,
                agentes,
                configuracion
            };
            const dataStr = JSON.stringify(backupData, null, 2);
            const blob = new Blob([dataStr], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `checkengine_backup_${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            mostrarMensaje("Respaldo guardado con éxito.", "success");
        }

        function importarDatos(event) {
            const file = event.target.files[0];
            if (!file) {
                return;
            }

            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const importedData = JSON.parse(e.target.result);
                    
                    // Comprobar si es el nuevo formato de respaldo completo
                    if (importedData && importedData.citas && importedData.clientes && importedData.agentes && importedData.configuracion) {
                        citas = importedData.citas || [];
                        clientes = importedData.clientes || [];
                        agentes = importedData.agentes || [];
                        configuracion = importedData.configuracion || {};

                        guardarCitas();
                        guardarClientes();
                        guardarAgentes();
                        guardarConfiguracion(); // Esto también llama a aplicarConfiguracion()
                        
                        // Recargar la UI
                        cargarCitas(); // Carga y renderiza todo
                        renderCitas();
                        mostrarMensaje("Respaldo completo restaurado con éxito.", "success");

                    } else if (Array.isArray(importedData)) { // Compatibilidad con formato antiguo
                        citas = importedData;
                        migrarDatosAntiguos();
                        guardarCitas();
                        renderCitas();
                        mostrarMensaje("Respaldo de citas (formato antiguo) importado correctamente.","info");
                    } else {
                        mostrarMensaje("El archivo no contiene un formato de datos válido.","danger");
                    }
                } catch (error) {
                    mostrarMensaje("Error al procesar el archivo. Asegúrate de que es un archivo JSON válido.","danger");
                }
            };
            reader.readAsText(file);
            // Limpiar el input para permitir re-importar el mismo archivo
            event.target.value = '';
        }

        function calcularEstadisticas(citasFiltradas) {
            const totalCitas = citasFiltradas.length;
            const recibidas = citasFiltradas.filter(c => c.estado === 'recibido' || c.estado === 'completada').length;
            const facturadas = citasFiltradas.filter(c => c.facturado).length;
            const montoTotal = citasFiltradas.filter(c => c.facturado).reduce((sum, c) => sum + (c.monto || 0), 0);
            const efectividad = totalCitas > 0 ? (recibidas / totalCitas) * 100 : 0;

            document.getElementById('statsTotal').textContent = totalCitas;
            document.getElementById('statsRecibidas').textContent = recibidas;
            document.getElementById('statsMonto').textContent = formatearMonto(montoTotal);
            document.getElementById('statsEfectividad').textContent = `${efectividad.toFixed(0)}%`;
        }

        /**
         * Guarda un agente nuevo o editado
         */
        function guardarAgente() {
            const id = agenteIdInput.value ? parseInt(agenteIdInput.value) : (agentes.length > 0 ? Math.max(...agentes.map(a => a.id)) + 1 : 1);
            const nombre = agenteNombreInput.value;
            const email = agenteEmailInput.value;
            const telefono = agenteTelefonoInput.value;
            const activo = agenteActivoInput.checked;
            
            if (!nombre) {
                mostrarMensaje("El nombre del agente es obligatorio.", "warning");
                return;
            }
            
            if (agenteIdInput.value) {
                // Editar agente existente
                const index = agentes.findIndex(a => a.id === id);
                if (index !== -1) {
                    agentes[index] = {
                        id: id,
                        nombre: nombre,
                        email: email,
                        telefono: telefono,
                        activo: activo
                    };
                }
            } else {
                // Agregar nuevo agente
                agentes.push({
                    id: id,
                    nombre: nombre,
                    email: email,
                    telefono: telefono,
                    activo: activo
                });
            }
            
            guardarAgentes();
            gestionAgentesModal.hide();
            mostrarMensaje(`Agente ${agenteIdInput.value ? 'actualizado' : 'agregado'} correctamente.`, "success");
        }

        /**
         * Edita un agente existente
         * @param {number} id - ID del agente a editar
         */
        function editarAgente(id) {
            const agente = agentes.find(a => a.id === id);
            if (agente) {
                agenteIdInput.value = agente.id;
                agenteNombreInput.value = agente.nombre;
                agenteEmailInput.value = agente.email || '';
                agenteTelefonoInput.value = agente.telefono || '';
                agenteActivoInput.checked = agente.activo;
                
                // Mostrar botón de eliminar
                btnEliminarAgente.style.display = 'block';
                
                gestionAgentesModal.show();
            }
        }

        /**
         * Elimina el agente actualmente en edición
         */
        function eliminarAgente() {
            const id = parseInt(agenteIdInput.value);
            if (id && confirm("¿Estás seguro de que quieres eliminar este agente?")) {
                agentes = agentes.filter(a => a.id !== id);
                guardarAgentes();
                gestionAgentesModal.hide();
                mostrarMensaje("Agente eliminado correctamente.", "success");
            }
        }

        /**
         * Guarda un nuevo cliente desde el modal
         */
        function guardarCliente() {
            const nombre = document.getElementById('clienteNombre').value.trim();
            const telefono = document.getElementById('clienteTelefono').value.trim();
            
            if (!nombre || !telefono) {
                mostrarMensaje('Nombre y teléfono son obligatorios.', 'warning');
                return;
            }

            const clienteExistente = clientes.find(c => c.telefono === telefono);
            if (clienteExistente) {
                 mostrarMensaje('Ya existe un cliente con este número de teléfono.', 'danger');
                 return;
            }

            const nuevoId = clientes.length > 0 ? Math.max(...clientes.map(c => c.id)) + 1 : 1;
            clientes.push({ id: nuevoId, nombre, telefono, email: document.getElementById('clienteEmail').value.trim() });
            
            guardarClientes();
            renderClientes();
            clienteModal.hide();
            mostrarMensaje('Cliente agregado con éxito.', 'success');
        }

        // --- Event Listeners ---
        document.addEventListener('DOMContentLoaded', () => {
            cargarCitas();
            
            // Establece la fecha actual por defecto en el filtro para mostrar solo las citas de hoy al cargar.
            const today = new Date().toISOString().split('T')[0];
            filtroFechaInput.value = today;

            // Sincronizar clientes al inicio
            sincronizarClientesDesdeCitas();
            
            // Renderizar todo con el filtro de hoy ya aplicado
            renderCitas();
        });

        // Manejar la visualización de la pestaña de inicio para recargar el dashboard
        const inicioTab = document.getElementById('pills-inicio-tab');
        if (inicioTab) {
            inicioTab.addEventListener('shown.bs.tab', renderDashboard);
        }


        // Manejar el formulario de nueva cita
        citaForm.addEventListener('submit', agregarCita);

        // Manejar el cambio en el select de servicio para mostrar/ocultar el campo "Otro"
        servicioSelect.addEventListener('change', () => {
            if (servicioSelect.value === 'Otro') {
                otroServicioContainer.style.display = '';
            } else {
                otroServicioContainer.style.display = 'none';
            }
        });

        // Manejar el checkbox de promoción en el formulario de nueva cita
        esPromocionCheck.addEventListener('change', () => {
            promoContainer.style.display = esPromocionCheck.checked ? '' : 'none';
        });

        // Manejar el checkbox de promoción en el formulario de edición
        editarEsPromocionCheck.addEventListener('change', () => {
            editarPromoContainer.style.display = editarEsPromocionCheck.checked ? '' : 'none';
        });

        /**
         * Limpia el formulario de nueva cita, incluyendo los campos de promoción.
         */
        function limpiarFormularioNuevaCita() {
            citaForm.reset();
            promoContainer.style.display = 'none';
            otroServicioContainer.style.display = 'none';
        }

        // Manejar los clics en los botones de filtro
        grupoFiltros.addEventListener('click', (e) => {
            const target = e.target;
            if (target.tagName === 'BUTTON') {
                const estado = target.dataset.estado;
                const todasBtn = grupoFiltros.querySelector('[data-estado="todas"]');

                if (estado === 'todas') {
                    // Si se hace clic en "Todas", se activa y se desactivan los demás.
                    if (!target.classList.contains('active')) {
                        grupoFiltros.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
                        target.classList.add('active');
                    }
                } else {
                    // Si se hace clic en otro botón, se alterna su estado.
                    target.classList.toggle('active');
                    // Y se desactiva "Todas".
                    todasBtn.classList.remove('active');
                }

                // Si no hay ningún filtro de estado específico activo, se activa "Todas".
                const algunActivo = grupoFiltros.querySelector('button.active:not([data-estado="todas"])');
                if (!algunActivo) {
                    todasBtn.classList.add('active');
                }

                renderCitas();
            }
        });

        // Manejar los filtros de reportes
        if (filtroReporteFechaInicioInput) {
            filtroReporteFechaInicioInput.addEventListener('change', generarReportes);
            filtroReporteFechaFinInput.addEventListener('change', generarReportes);
            filtroReporteAgenteSelect.addEventListener('change', generarReportes);
            filtroReporteServicioSelect.addEventListener('change', generarReportes);
            filtroReporteFacturadoInput.addEventListener('change', generarReportes);

            grupoFiltrosReportes.addEventListener('click', (e) => {
                const target = e.target;
                if (target.tagName === 'BUTTON') {
                    const estado = target.dataset.estado;
                    const todasBtn = grupoFiltrosReportes.querySelector('[data-estado="todas"]');

                    if (estado === 'todas') {
                        if (!target.classList.contains('active')) {
                            grupoFiltrosReportes.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
                            target.classList.add('active');
                        }
                    } else {
                        target.classList.toggle('active');
                        todasBtn.classList.remove('active');
                    }

                    const algunActivo = grupoFiltrosReportes.querySelector('button.active:not([data-estado="todas"])');
                    if (!algunActivo) {
                        todasBtn.classList.add('active');
                    }
                    generarReportes();
                }
            });
        }

        // Manejar el botón de exportar a Excel
        btnExportarExcel.addEventListener('click', exportarAExcel);

        // Manejar el botón de guardar manual
        btnGuardarManual.addEventListener('click', guardarManual);

        // Manejar el botón de importar desde Excel
        btnImportarExcel.addEventListener('click', () => {
            importarExcelModal.show();
        });

        // Manejar la selección de archivo Excel
        archivoExcelInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                procesarArchivoExcel(e.target.files[0]);
            }
        });

        // Manejar la confirmación de importación
        btnConfirmarImportacion.addEventListener('click', confirmarImportacion);

        // Manejar el input de archivo para importar JSON
        importarArchivoInput.addEventListener('change', importarDatos);

        // Manejar el botón de copiar lista
        btnCopiarLista.addEventListener('click', () => {
            const texto = generarTextoParaCopiar();
            copiarAlPortapapeles(texto);
        });

        // Manejar la edición del servicio en el modal
        editarServicioSelect.addEventListener('change', () => {
            if (editarServicioSelect.value === 'Otro') {
                editarOtroServicioContainer.style.display = '';
            } else {
                editarOtroServicioContainer.style.display = 'none';
            }
        });
        
        // Manejar el cambio en el select de cotización para mostrar/ocultar el motivo
        editarTieneCotizacionSelect.addEventListener('change', () => {
            if (editarTieneCotizacionSelect.value === 'no') {
                editarMotivoCotizacionContainer.style.display = '';
            } else {
                editarMotivoCotizacionContainer.style.display = 'none';
            }
        });

        // Manejar el botón de guardar edición en el modal
        btnGuardarEdicion.addEventListener('click', guardarEdicion);

        // Manejar eventos de la sección de clientes
        if (btnNuevoCliente) {
            btnNuevoCliente.addEventListener('click', () => {
                clienteForm.reset();
                clienteModal.show();
            });
            btnGuardarCliente.addEventListener('click', guardarCliente);
            filtroClientes.addEventListener('input', renderClientes);
        }

        // Manejar el botón de confirmar eliminación en el modal
        btnConfirmarEliminar.addEventListener('click', eliminarCita);

        // Manejar el cambio en el input de fecha para las estadísticas
        filtroFechaInput.addEventListener('change', () => {
            renderCitas();
            sincronizarCalendarioConFiltros();
        });

        // Manejar la visualización de la pestaña del calendario para renderizarlo correctamente
        const calendarioTab = document.getElementById('pills-calendario-tab');
        if (calendarioTab) {
            calendarioTab.addEventListener('shown.bs.tab', function () {
                // Cuando la pestaña se muestra, el calendario (que pudo haber sido inicializado
                // en un contenedor oculto) necesita ser renderizado.
                setTimeout(() => {
                    // Se vuelve a llamar a renderCalendario para que se dibuje con las dimensiones correctas.
                    renderCalendario();
                }, 10); // Un pequeño delay para asegurar que el contenedor es completamente visible.
            });
        }
        
        const clientesTab = document.getElementById('pills-clientes-tab');
        if (clientesTab) {
            clientesTab.addEventListener('shown.bs.tab', renderClientes);
        }


        // Manejar el cambio en el select de mes
        filtroMesSelect.addEventListener('change', () => {
            renderCitas();
            sincronizarCalendarioConFiltros();
        });

        // Manejar el cambio en el select de año
        filtroAnioSelect.addEventListener('change', () => {
            renderCitas();
            sincronizarCalendarioConFiltros();
        });

        // Manejar el cambio en el switch de facturado
        filtroFacturadoInput.addEventListener('change', renderCitas);

        // Manejar el filtro de búsqueda por texto
        filtroBusquedaInput.addEventListener('input', renderCitas);

        // Manejar el filtro de búsqueda de agentes
        filtroAgente.addEventListener('input', () => {
            mostrarModalAgentes();
        });

        // Manejar la selección de agente
        btnSeleccionarAgente.addEventListener('click', () => {
            if (agenteSeleccionado) {
                document.getElementById('agente').value = agenteSeleccionado.id;
                seleccionarAgenteModal.hide();
                agenteSeleccionado = null;
            }
        });

        // Manejar la carga de logo
        configLogo.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    logoPreview.src = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        });

        // Manejar el guardado de configuración
        btnGuardarConfiguracion.addEventListener('click', () => {
            configuracion.nombreEmpresa = configNombreEmpresa.value;
            configuracion.sucursal = configSucursal.value;
            configuracion.direccion = configDireccion.value;
            configuracion.telefono = configTelefono.value;
            configuracion.moneda = configMoneda.value;
            configuracion.formatoMoneda = configFormatoMoneda.value;
            configuracion.qrUrl = configQrUrlInput.value;
            configuracion.primaryColor = configPrimaryColorInput.value;
            configuracion.secondaryColor = configSecondaryColorInput.value;
            
            // Guardar logo si se ha seleccionado uno nuevo
            if (configLogo.files[0]) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    configuracion.logo = event.target.result;
                    guardarConfiguracion();
                };
                reader.readAsDataURL(configLogo.files[0]);
            } else {
                guardarConfiguracion();
            }
        });

        // Manejar el guardado de agente
        btnGuardarAgente.addEventListener('click', guardarAgente);

        // Manejar la eliminación de agente
        btnEliminarAgente.addEventListener('click', eliminarAgente);

        // Inicializar modal de gestión de agentes al mostrarse
        gestionAgentesModalEl.addEventListener('show.bs.modal', () => {
            // Si es un nuevo agente, limpiar el formulario
            if (!agenteIdInput.value) {
                agenteForm.reset();
                btnEliminarAgente.style.display = 'none';
            }
        });

        // Limpiar ID de agente al ocultar el modal
        gestionAgentesModalEl.addEventListener('hidden.bs.modal', () => {
            agenteIdInput.value = '';
        });

        // Registrar el Service Worker para la funcionalidad PWA
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('sw.js').then(registration => {
                    console.log('ServiceWorker registrado con éxito:', registration.scope);
                }).catch(error => {
                    console.log('Fallo en el registro de ServiceWorker:', error);
                });
            });
        }