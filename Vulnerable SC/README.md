🔒 Vulnerability Demonstration: Visibility Modifiers
License: MIT
Solidity
Hardhat

📝 Descripción
Este proyecto demuestra una vulnerabilidad común en smart contracts relacionada con modificadores de visibilidad incorrectos.

🚨 Vulnerabilidad
La vulnerabilidad existe porque la función _updateBalance en VulnerableBank está marcada como public cuando debería ser internal. Esto permite que cualquier contrato externo pueda modificar los balances directamente.

🏗️ Estructura del Proyecto
BASH

├── contracts/
│   ├── VulnerableBank.sol    # Contrato vulnerable
│   └── ExploitBank.sol       # Contrato que explota la vulnerabilidad
├── test/
│   └── test.js              # Tests que demuestran la vulnerabilidad
🛠️ Configuración del Entorno
Clonar el repositorio:
BASH

git clone https://github.com/tu-usuario/visibility-modifier-vulnerability.git
cd visibility-modifier-vulnerability
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
🔬 Demostración de la Vulnerabilidad
Un usuario deposita ETH en VulnerableBank
El atacante usa ExploitBank para llamar directamente a _updateBalance
Los fondos del usuario son manipulados sin autorización
JAVASCRIPT

// Ejemplo de explotación
await vulnerableBank.connect(user).deposit({ value: ethers.utils.parseEther("1") });
await exploitBank.connect(attacker).exploit(user.address);
💥 Impacto
⚠️ Modificación no autorizada de balances
💸 Pérdida de fondos de usuarios
🚫 Bypass de la lógica de negocio
✅ Solución
La versión segura del contrato marca la función como internal:

SOLIDITY

function _updateBalance(address user, uint256 amount) internal {
    balances[user] = amount;
}
📚 Mejores Prácticas
Usar internal para funciones internas
Seguir el principio de mínimo privilegio
Auditar la visibilidad de todas las funciones
Implementar controles de acceso adecuados
⚠️ Notas de Seguridad
⚠️ Este código es solo para fines educativos. No usar en producción.

📄 Licencia
Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE.md para más detalles.

🤝 Contribuir
Las contribuciones son bienvenidas. Por favor:

🍴 Fork el proyecto
🔨 Crea tu Feature Branch
💾 Commit tus cambios
📤 Push al Branch
🔍 Abre un Pull Request
📚 Referencias
Solidity Docs - Visibility
Smart Contract Best Practices
Built with ❤️ by Tu Usuario
