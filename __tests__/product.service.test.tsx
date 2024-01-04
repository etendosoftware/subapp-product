import 'react-native';
import ProductService from '../lib/data_gen/productservice';

ProductService.BACK._url = 'http://localhost:8096';
ProductService.BACK._authToken =
  'eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJFdGVuZG9SWCBBdXRoIiwiaWF0IjoxNjk5NDcyNDc3LCJhZF91c2VyX2lkIjoiMTY3NDUwQTVCQjI4NEFCMjlDNEZFRjAzOUU5OEM5NjMiLCJhZF9jbGllbnRfaWQiOiIyM0M1OTU3NUI5Q0Y0NjdDOTYyMDc2MEVCMjU1QjM4OSIsImFkX29yZ19pZCI6IkU0NDNBMzE5OTJDQjQ2MzVBRkNBRUFCRTcxODNDRTg1IiwiYWRfcm9sZV9pZCI6IkYzMTk2QTMwQjUzQTQyNzc4NzI3QjI4NTJGRjkwQzI0Iiwic2VhcmNoX2tleSI6Im9iY29ubiIsInNlcnZpY2VfaWQiOiI1OTJBRDg3OTBFQUQ0M0FCOEY0RUI0NEFFODNDNzkyNyJ9.Ghjdvd6YDHDgOfY64zC5OtrbdQvf8ZASO2B33jknSqFew7uVnz9XDWv-mZqAiUfBcu2aSGERNU7acEMy0XsQHctGdU9_B5430hO_9kpumLeqbKHrxv4nFX2JvjaVSbu4ZFsZh-lfuPyTT6SoOmerITHC-0sMKCPHoKoJ6Z35xb1hYk1OWilIGPpKFVYbBm4lppNgAMYjywhWkzVeAczkji-g4U7KilhhPJPOnx75b-6EgDe4jxcxF3z_QtXS5sS9IQFrTOYi1VpiDvkVw3ZPOPHLh6ntXELLVpYhWHsJwXtYxfdaq4kTkIHpKHW4J41tVDC-7EFaIXohGAB02wQG0A';

describe('ProductService', () => {
  test('get all products', async () => {
    await ProductService.BACK.getFilteredProducts('').then(products => {
      expect(products.content.length).toBe(20);
    });
  });
  test('get products by upcean', async () => {
    await ProductService.BACK.getFilteredProducts('3344456').then(products => {
      expect(products.content[0]).toEqual(
        expect.objectContaining({
          id: '4028E6C72959682B01295ADC1FD50234',
          name: 'B BOM',
          uPCEAN: '3344456',
        }),
      );
    });
  });
  test('save product', async () => {
    let product = await ProductService.BACK.save({
      name: 'TEST PRODUCT',
      uPCEAN: '999999',
    });
    expect(product).toEqual(
      expect.objectContaining({
        name: 'TEST PRODUCT',
        uPCEAN: '999999',
      }),
    );
  });
  test('update product', async () => {
    var product = await ProductService.BACK.save({
      name: 'TEST PRODUCT 1',
      uPCEAN: '999998',
    });
    expect(product).toEqual(
      expect.objectContaining({
        name: 'TEST PRODUCT 1',
        uPCEAN: '999998',
      }),
    );
    product.name = 'TEST PRODUCT 2';
    var product2 = await ProductService.BACK.save(product);
    expect(product2).toEqual(
      expect.objectContaining({
        name: 'TEST PRODUCT 2',
        uPCEAN: '999998',
      }),
    );
  });
});
