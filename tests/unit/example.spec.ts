// ? Nombre a decirle al test suit y normalmente es el nombre del componente a probar
describe('Example component', () => {
  // ! test (o it) define una prueba específica que verifica una funcionalidad concreta.
  // ! Cada test debe centrarse en un caso de uso o escenario.
  test("Debe ser mayor a 10", () => {
    // Arreglar
    let value: number = 11;

    // Estimulo
    value += 2;
    // Observar
    expect(value).toBeGreaterThan(10);
  })
})