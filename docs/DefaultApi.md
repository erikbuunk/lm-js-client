# LogicMillApi.DefaultApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulkEncodeDocumentsEndpointIndicesIndexEncodeBulkPut**](DefaultApi.md#bulkEncodeDocumentsEndpointIndicesIndexEncodeBulkPut) | **PUT** /indices/{index}/encode/bulk | Bulk Encode Documents Endpoint
[**bulkSaveDocumentsEndpointIndicesIndexAddBulkPut**](DefaultApi.md#bulkSaveDocumentsEndpointIndicesIndexAddBulkPut) | **PUT** /indices/{index}/add/bulk | Bulk Save Documents Endpoint
[**createIndexEndpointIndicesIndexPost**](DefaultApi.md#createIndexEndpointIndicesIndexPost) | **POST** /indices/{index} | Create Index Endpoint
[**existsEndpointIndicesIndexDocDocIdExistsGet**](DefaultApi.md#existsEndpointIndicesIndexDocDocIdExistsGet) | **GET** /indices/{index}/doc/{doc_id}/exists | Exists Endpoint
[**readDocumentEndpointIndicesIndexDocDocIdGet**](DefaultApi.md#readDocumentEndpointIndicesIndexDocDocIdGet) | **GET** /indices/{index}/doc/{doc_id} | Read Document Endpoint
[**readIndexMappingIndicesIndexMappingGet**](DefaultApi.md#readIndexMappingIndicesIndexMappingGet) | **GET** /indices/{index}/mapping | Read Index Mapping
[**readIndicesEndpointIndicesGet**](DefaultApi.md#readIndicesEndpointIndicesGet) | **GET** /indices | Read Indices Endpoint
[**readSimilarDocumentsEndpointIndicesIndexDocDocIdSimilarityGet**](DefaultApi.md#readSimilarDocumentsEndpointIndicesIndexDocDocIdSimilarityGet) | **GET** /indices/{index}/doc/{doc_id}/similarity | Read Similar Documents Endpoint
[**readSimilarDocumentsWithQueryEndpointIndicesIndexDocDocIdSimilarityPut**](DefaultApi.md#readSimilarDocumentsWithQueryEndpointIndicesIndexDocDocIdSimilarityPut) | **PUT** /indices/{index}/doc/{doc_id}/similarity | Read Similar Documents With Query Endpoint
[**readStatusEndpointGet**](DefaultApi.md#readStatusEndpointGet) | **GET** / | Read Status Endpoint
[**searchEndpointIndicesIndexSearchPut**](DefaultApi.md#searchEndpointIndicesIndexSearchPut) | **PUT** /indices/{index}/search | Search Endpoint
[**similaritySearchEndpointIndicesIndexEncodeSimilarityPut**](DefaultApi.md#similaritySearchEndpointIndicesIndexEncodeSimilarityPut) | **PUT** /indices/{index}/encode/similarity | Similarity Search Endpoint
[**updateMetadataEndpointIndicesIndexDocDocIdMetadataPut**](DefaultApi.md#updateMetadataEndpointIndicesIndexDocDocIdMetadataPut) | **PUT** /indices/{index}/doc/{doc_id}/metadata | Update Metadata Endpoint
[**updateVectorEndpointIndicesIndexDocDocIdVectorPut**](DefaultApi.md#updateVectorEndpointIndicesIndexDocDocIdVectorPut) | **PUT** /indices/{index}/doc/{doc_id}/vector | Update Vector Endpoint

<a name="bulkEncodeDocumentsEndpointIndicesIndexEncodeBulkPut"></a>
# **bulkEncodeDocumentsEndpointIndicesIndexEncodeBulkPut**
> [DocVectorWrapper] bulkEncodeDocumentsEndpointIndicesIndexEncodeBulkPut(bodyindex, opts)

Bulk Encode Documents Endpoint

Encode multiple documents  :param index: the index in elastic search :param payload: :param save_in_es: :return:

### Example
```javascript
import LogicMillApi from 'logic_mill_api';

let apiInstance = new LogicMillApi.DefaultApi();
let body = new LogicMillApi.BulkDocumentRequest(); // BulkDocumentRequest | 
let index = "index_example"; // String | 
let opts = { 
  'saveInEs': false // Boolean | 
};
apiInstance.bulkEncodeDocumentsEndpointIndicesIndexEncodeBulkPut(bodyindex, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BulkDocumentRequest**](BulkDocumentRequest.md)|  | 
 **index** | **String**|  | 
 **saveInEs** | **Boolean**|  | [optional] [default to false]

### Return type

[**[DocVectorWrapper]**](DocVectorWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkSaveDocumentsEndpointIndicesIndexAddBulkPut"></a>
# **bulkSaveDocumentsEndpointIndicesIndexAddBulkPut**
> ModelObject bulkSaveDocumentsEndpointIndicesIndexAddBulkPut(bodyindex)

Bulk Save Documents Endpoint

Saves multiple documents, that already include vectors, in elastic search :param index: the index in elastic search :param payload: the bulk save request :return:

### Example
```javascript
import LogicMillApi from 'logic_mill_api';

let apiInstance = new LogicMillApi.DefaultApi();
let body = new LogicMillApi.BulkSaveDocumentRequest(); // BulkSaveDocumentRequest | 
let index = "index_example"; // String | 

apiInstance.bulkSaveDocumentsEndpointIndicesIndexAddBulkPut(bodyindex, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BulkSaveDocumentRequest**](BulkSaveDocumentRequest.md)|  | 
 **index** | **String**|  | 

### Return type

[**ModelObject**](ModelObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createIndexEndpointIndicesIndexPost"></a>
# **createIndexEndpointIndicesIndexPost**
> ModelObject createIndexEndpointIndicesIndexPost(bodyindex)

Create Index Endpoint

Create a new index in elastic search with a search vector field :param index: the index in elastic search :param payload: :return:

### Example
```javascript
import LogicMillApi from 'logic_mill_api';

let apiInstance = new LogicMillApi.DefaultApi();
let body = new LogicMillApi.CreateIndexRequest(); // CreateIndexRequest | 
let index = "index_example"; // String | 

apiInstance.createIndexEndpointIndicesIndexPost(bodyindex, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateIndexRequest**](CreateIndexRequest.md)|  | 
 **index** | **String**|  | 

### Return type

[**ModelObject**](ModelObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="existsEndpointIndicesIndexDocDocIdExistsGet"></a>
# **existsEndpointIndicesIndexDocDocIdExistsGet**
> existsEndpointIndicesIndexDocDocIdExistsGet(index, docId)

Exists Endpoint

Updates the vector of a specific document in the database :param index: the index in elastic search :param doc_id: the id of the document in elastic search :return:

### Example
```javascript
import LogicMillApi from 'logic_mill_api';

let apiInstance = new LogicMillApi.DefaultApi();
let index = "index_example"; // String | 
let docId = "docId_example"; // String | 

apiInstance.existsEndpointIndicesIndexDocDocIdExistsGet(index, docId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **index** | **String**|  | 
 **docId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readDocumentEndpointIndicesIndexDocDocIdGet"></a>
# **readDocumentEndpointIndicesIndexDocDocIdGet**
> DocVectorWrapper readDocumentEndpointIndicesIndexDocDocIdGet(index, docId)

Read Document Endpoint

Get a document from the database index by its id :param doc_id: the id of the document in elastic search :param index: the index in elastic search :return:

### Example
```javascript
import LogicMillApi from 'logic_mill_api';

let apiInstance = new LogicMillApi.DefaultApi();
let index = "index_example"; // String | 
let docId = "docId_example"; // String | 

apiInstance.readDocumentEndpointIndicesIndexDocDocIdGet(index, docId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **index** | **String**|  | 
 **docId** | **String**|  | 

### Return type

[**DocVectorWrapper**](DocVectorWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readIndexMappingIndicesIndexMappingGet"></a>
# **readIndexMappingIndicesIndexMappingGet**
> ModelObject readIndexMappingIndicesIndexMappingGet(index)

Read Index Mapping

returns the mapping of the index :return: dict

### Example
```javascript
import LogicMillApi from 'logic_mill_api';

let apiInstance = new LogicMillApi.DefaultApi();
let index = "index_example"; // String | 

apiInstance.readIndexMappingIndicesIndexMappingGet(index, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **index** | **String**|  | 

### Return type

[**ModelObject**](ModelObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readIndicesEndpointIndicesGet"></a>
# **readIndicesEndpointIndicesGet**
> ModelObject readIndicesEndpointIndicesGet()

Read Indices Endpoint

returns all indices from the database :return: dict

### Example
```javascript
import LogicMillApi from 'logic_mill_api';

let apiInstance = new LogicMillApi.DefaultApi();
apiInstance.readIndicesEndpointIndicesGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ModelObject**](ModelObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readSimilarDocumentsEndpointIndicesIndexDocDocIdSimilarityGet"></a>
# **readSimilarDocumentsEndpointIndicesIndexDocDocIdSimilarityGet**
> ModelObject readSimilarDocumentsEndpointIndicesIndexDocDocIdSimilarityGet(index, docId, opts)

Read Similar Documents Endpoint

Get similar documents of a reference document from the database :param doc_id: the id of the reference document in elastic search :param index: the index in elastic search :param amount: amount of similar documents :return:

### Example
```javascript
import LogicMillApi from 'logic_mill_api';

let apiInstance = new LogicMillApi.DefaultApi();
let index = "index_example"; // String | 
let docId = "docId_example"; // String | 
let opts = { 
  'amount': 10 // Number | 
};
apiInstance.readSimilarDocumentsEndpointIndicesIndexDocDocIdSimilarityGet(index, docId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **index** | **String**|  | 
 **docId** | **String**|  | 
 **amount** | **Number**|  | [optional] [default to 10]

### Return type

[**ModelObject**](ModelObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readSimilarDocumentsWithQueryEndpointIndicesIndexDocDocIdSimilarityPut"></a>
# **readSimilarDocumentsWithQueryEndpointIndicesIndexDocDocIdSimilarityPut**
> ModelObject readSimilarDocumentsWithQueryEndpointIndicesIndexDocDocIdSimilarityPut(bodyindexdocId, opts)

Read Similar Documents With Query Endpoint

Get similar documents of a reference document from the database and use a search query to filter :param doc_id: the id of the reference document in elastic search :param index: the index in elastic search :param payload: the search query :param amount: amount of similar documents :return:

### Example
```javascript
import LogicMillApi from 'logic_mill_api';

let apiInstance = new LogicMillApi.DefaultApi();
let body = new LogicMillApi.SimilarityQueryRequest(); // SimilarityQueryRequest | 
let index = "index_example"; // String | 
let docId = "docId_example"; // String | 
let opts = { 
  'amount': 10 // Number | 
};
apiInstance.readSimilarDocumentsWithQueryEndpointIndicesIndexDocDocIdSimilarityPut(bodyindexdocId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SimilarityQueryRequest**](SimilarityQueryRequest.md)|  | 
 **index** | **String**|  | 
 **docId** | **String**|  | 
 **amount** | **Number**|  | [optional] [default to 10]

### Return type

[**ModelObject**](ModelObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="readStatusEndpointGet"></a>
# **readStatusEndpointGet**
> ModelObject readStatusEndpointGet()

Read Status Endpoint

status / health endpoint TODO: add elastic search availability :return: dict

### Example
```javascript
import LogicMillApi from 'logic_mill_api';

let apiInstance = new LogicMillApi.DefaultApi();
apiInstance.readStatusEndpointGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ModelObject**](ModelObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchEndpointIndicesIndexSearchPut"></a>
# **searchEndpointIndicesIndexSearchPut**
> ModelObject searchEndpointIndicesIndexSearchPut(bodyindex)

Search Endpoint

Searches in an index using a keyword :param index: the index in elastic search :param payload: the search request payload :return:

### Example
```javascript
import LogicMillApi from 'logic_mill_api';

let apiInstance = new LogicMillApi.DefaultApi();
let body = new LogicMillApi.SearchRequest(); // SearchRequest | 
let index = "index_example"; // String | 

apiInstance.searchEndpointIndicesIndexSearchPut(bodyindex, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchRequest**](SearchRequest.md)|  | 
 **index** | **String**|  | 

### Return type

[**ModelObject**](ModelObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="similaritySearchEndpointIndicesIndexEncodeSimilarityPut"></a>
# **similaritySearchEndpointIndicesIndexEncodeSimilarityPut**
> ModelObject similaritySearchEndpointIndicesIndexEncodeSimilarityPut(bodyindex, opts)

Similarity Search Endpoint

Find similar documents :param index: the index in elastic search :param payload: the reference document :param amount: amount of similar documents :return:

### Example
```javascript
import LogicMillApi from 'logic_mill_api';

let apiInstance = new LogicMillApi.DefaultApi();
let body = new LogicMillApi.SimilarityRequest(); // SimilarityRequest | 
let index = "index_example"; // String | 
let opts = { 
  'amount': 10 // Number | 
};
apiInstance.similaritySearchEndpointIndicesIndexEncodeSimilarityPut(bodyindex, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SimilarityRequest**](SimilarityRequest.md)|  | 
 **index** | **String**|  | 
 **amount** | **Number**|  | [optional] [default to 10]

### Return type

[**ModelObject**](ModelObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateMetadataEndpointIndicesIndexDocDocIdMetadataPut"></a>
# **updateMetadataEndpointIndicesIndexDocDocIdMetadataPut**
> ModelObject updateMetadataEndpointIndicesIndexDocDocIdMetadataPut(bodyindexdocId)

Update Metadata Endpoint

Updates the metadata of a specific document in the database :param doc_id: the id of the document in elastic search :param index: the index in elastic search :param payload: the vector request :return:

### Example
```javascript
import LogicMillApi from 'logic_mill_api';

let apiInstance = new LogicMillApi.DefaultApi();
let body = new LogicMillApi.MetadataRequest(); // MetadataRequest | 
let index = "index_example"; // String | 
let docId = "docId_example"; // String | 

apiInstance.updateMetadataEndpointIndicesIndexDocDocIdMetadataPut(bodyindexdocId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MetadataRequest**](MetadataRequest.md)|  | 
 **index** | **String**|  | 
 **docId** | **String**|  | 

### Return type

[**ModelObject**](ModelObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateVectorEndpointIndicesIndexDocDocIdVectorPut"></a>
# **updateVectorEndpointIndicesIndexDocDocIdVectorPut**
> ModelObject updateVectorEndpointIndicesIndexDocDocIdVectorPut(bodyindexdocId)

Update Vector Endpoint

Updates the vector of a specific document in the database :param doc_id: the id of the document in elastic search :param index: the index in elastic search :param payload: the vector request :return:

### Example
```javascript
import LogicMillApi from 'logic_mill_api';

let apiInstance = new LogicMillApi.DefaultApi();
let body = new LogicMillApi.VectorRequest(); // VectorRequest | 
let index = "index_example"; // String | 
let docId = "docId_example"; // String | 

apiInstance.updateVectorEndpointIndicesIndexDocDocIdVectorPut(bodyindexdocId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**VectorRequest**](VectorRequest.md)|  | 
 **index** | **String**|  | 
 **docId** | **String**|  | 

### Return type

[**ModelObject**](ModelObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

