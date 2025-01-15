Instrucciones de Uso

Instalar dependencias:
BASH

npm install

Compilar contratos:
BASH

npx hardhat compile

Ejecutar tests:
BASH

npx hardhat test

Explicación de la Vulnerabilidad

La vulnerabilidad existe porque la función _updateBalance está marcada como public cuando debería ser internal. Esto permite que cualquier contrato externo pueda modificar los balances directamente.

Impacto

Modificación no autorizada de balances
Bypass de la lógica de negocio
Pérdida de fondos de usuarios

Prevención

Usar internal para funciones internas
Seguir el principio de mínimo privilegio
Auditar visibilidad de funciones
Implementar controles de acceso adecuados

Notas

Este código es solo para fines educativos. No usar en producción.
