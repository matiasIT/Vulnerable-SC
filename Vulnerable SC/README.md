Demostracion de las vulnerabilidades de este SmartContract

Este proyecto demuestra una vulnerabilidad común en smart contracts relacionada con modificadores de visibilidad incorrectos.

Descripción de la Vulnerabilidad

La vulnerabilidad existe porque la función _updateBalance en VulnerableBank está marcada como public cuando debería ser internal. Esto permite que cualquier contrato externo pueda modificar los balances directamente, evitando las validaciones y controles de seguridad.

Estructura del Proyecto

├── contracts/
│   ├── VulnerableBank.sol    // Contrato vulnerable
│   └── ExploitBank.sol       // Contrato que explota la vulnerabilidad
├── test/
│   └── test.js              // Tests que demuestran la vulnerabilidad

Configuración del Entorno

Instalar dependencias:
BASH

npm install
Compilar contratos:
BASH

npx hardhat compile
Ejecutar tests:
BASH

npx hardhat test
Para ver trazas detalladas:

BASH

npx hardhat test --trace
Demostración de la Vulnerabilidad
Un usuario deposita ETH en VulnerableBank
El atacante usa ExploitBank para llamar directamente a _updateBalance
Los fondos del usuario son manipulados sin autorización
Para ver la demostración, ejecuta:

BASH

npx hardhat test

Impacto

Modificación no autorizada de balances
Pérdida de fondos de usuarios
Bypass de la lógica de negocio

Solución

La versión segura del contrato marca la función como internal:

SOLIDITY

function _updateBalance(address user, uint256 amount) internal {
    balances[user] = amount;
}

Mejores Prácticas

Usar internal para funciones internas
Seguir el principio de mínimo privilegio
Auditar la visibilidad de todas las funciones
Implementar controles de acceso adecuados

Notas de Seguridad

Este código es solo para fines educativos. No usar en producción.

Licencia
MIT

Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios propuestos.

Referencias

Solidity Docs - Visibility
Smart Contract Best Practices
Para reproducir el problema:

Clonar repositorio

Instala dependencias
Ejecuta los tests
Revisa los resultados
Para cualquier duda o sugerencia, abre un issue en el repositorio.
