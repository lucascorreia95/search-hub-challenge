import DocumentoReducer from './DocumentoState';
import { DispatchTypes, Menus } from './types';
import { initialState } from './index';

describe('DocumentoReducer store', () => {
  it('Should return state with test', () => {
    const fakeAction = {
      type: DispatchTypes.Menu,
      payload: { menu: 'test' }
    };

    const returnValue = DocumentoReducer(fakeAction);

    expect(returnValue).toEqual(
      expect.objectContaining({
        menu: 'test'
      })
    );
  });

  it('Should return editorInstance', () => {
    const fakeAction = {
      type: DispatchTypes.Editor,
      payload: { editor: 'test' }
    };

    const returnValue = DocumentoReducer(fakeAction);

    expect(returnValue).toEqual(
      expect.objectContaining({
        editorInstance: expect.any(String)
      })
    );
  });

  it('Should return documento', () => {
    const fakeAction = {
      type: DispatchTypes.Documento,
      payload: {
        documento: {
          id: 50
        }
      }
    };

    const returnValue = DocumentoReducer(fakeAction);

    expect(returnValue.documento.id).toEqual(50);
  });

  it('Should return fullscreen', () => {
    const fakeAction = {
      type: DispatchTypes.FullScreen,
      payload: {
        fullScreen: true
      }
    };

    const returnValue = DocumentoReducer(fakeAction);

    expect(returnValue.fullScreen).toEqual(true);
  });

  it('Should return modelo', () => {
    const fakeAction = {
      type: DispatchTypes.Modelo,
      payload: { modelo: { conteudo: 1 } }
    };

    const returnValue = DocumentoReducer(fakeAction);

    expect(returnValue).toEqual(
      expect.objectContaining({
        documento: expect.any(Object)
      })
    );

    expect(returnValue).toEqual(
      expect.objectContaining({
        documento: expect.objectContaining({
          conteudo: expect.any(Number)
        })
      })
    );
  });

  it('Should return loading', () => {
    const fakeAction = {
      type: DispatchTypes.Loading,
      payload: { loading: 'true' }
    };

    const returnValue = DocumentoReducer(fakeAction);

    expect(returnValue).toEqual(
      expect.objectContaining({
        loading: expect.any(String)
      })
    );
  });

  it('Should return Partes', () => {
    const fakeAction = {
      type: DispatchTypes.PropriedadesPartes,
      payload: {
        propriedades: {
          partes: {
            Solicitante: {
              id_pessoa: 1,
              id_tipo_parte: 2
            }
          }
        }
      }
    };

    const returnValue = DocumentoReducer(fakeAction);

    expect(returnValue).toEqual(
      expect.objectContaining({
        propriedades: expect.objectContaining({
          partes: {
            Solicitante: {
              id_pessoa: 1,
              id_tipo_parte: 2
            }
          }
        })
      })
    );
  });

  it('Should return Propriedades', () => {
    const fakeAction = {
      type: DispatchTypes.Propriedades,
      payload: {
        propriedades: {
          test: 'Lucas',
          partes: {
            Solicitante: {
              id_pessoa: 1,
              id_tipo_parte: 2
            }
          }
        }
      }
    };

    const returnValue = DocumentoReducer(fakeAction);

    expect(returnValue).toEqual(
      expect.objectContaining({
        propriedades: expect.objectContaining({
          test: 'Lucas',
          partes: {
            Solicitante: {
              id_pessoa: 1,
              id_tipo_parte: 2
            }
          }
        })
      })
    );
  });

  it('Should return Certificado', () => {
    const fakeAction = {
      type: DispatchTypes.Certificado,
      payload: {
        certificado: 'Certificado',
        cert: 'Cert'
      }
    };

    const returnValue = DocumentoReducer(fakeAction);

    expect(returnValue).toEqual(
      expect.objectContaining({
        certificado: 'Certificado',
        cert: 'Cert'
      })
    );
  });

  it('Should return Lote', () => {
    const fakeAction = {
      type: DispatchTypes.Lote,
      payload: {
        lote: ['item 1', 'item 2']
      }
    };

    const returnValue = DocumentoReducer(fakeAction);

    expect(returnValue).toEqual(
      expect.objectContaining({
        lote: ['item 1', 'item 2']
      })
    );
  });

  it('Should return state without changes', () => {
    const fakeAction = {
      type: 'arroz',
      payload: { loading: 'true' }
    };

    const returnValue = DocumentoReducer(fakeAction);

    expect(returnValue).toEqual(initialState);
  });
});
