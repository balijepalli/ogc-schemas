var OWS_1_0_0_Module_Factory = function () {
  var OWS_1_0_0 = {
    name: 'OWS_1_0_0',
    defaultElementNamespaceURI: 'http:\/\/www.opengis.net\/ows',
    defaultAttributeNamespaceURI: 'http:\/\/www.w3.org\/1999\/xlink',
    dependencies: ['XLink_1_0'],
    typeInfos: [{
        localName: 'SectionsType',
        propertyInfos: [{
            name: 'section',
            collection: true,
            elementName: 'Section'
          }]
      }, {
        localName: 'CodeType',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'codeSpace',
            attributeName: {
              localPart: 'codeSpace'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'IdentificationType',
        baseTypeInfo: '.DescriptionType',
        propertyInfos: [{
            name: 'identifier',
            elementName: 'Identifier',
            typeInfo: '.CodeType'
          }, {
            name: 'boundingBox',
            collection: true,
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'BoundingBox',
            typeInfo: '.BoundingBoxType',
            type: 'elementRef'
          }, {
            name: 'outputFormat',
            collection: true,
            elementName: 'OutputFormat'
          }, {
            name: 'availableCRS',
            collection: true,
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AvailableCRS',
            type: 'elementRef'
          }, {
            name: 'metadata',
            collection: true,
            elementName: 'Metadata',
            typeInfo: '.MetadataType'
          }]
      }, {
        localName: 'ServiceIdentification',
        baseTypeInfo: '.DescriptionType',
        propertyInfos: [{
            name: 'serviceType',
            elementName: 'ServiceType',
            typeInfo: '.CodeType'
          }, {
            name: 'serviceTypeVersion',
            collection: true,
            elementName: 'ServiceTypeVersion'
          }, {
            name: 'fees',
            elementName: 'Fees'
          }, {
            name: 'accessConstraints',
            collection: true,
            elementName: 'AccessConstraints'
          }]
      }, {
        localName: 'MetadataType',
        propertyInfos: [{
            name: 'abstractMetaData',
            elementName: 'AbstractMetaData',
            typeInfo: 'AnyType'
          }, {
            name: 'about',
            attributeName: {
              localPart: 'about'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'TelephoneType',
        propertyInfos: [{
            name: 'voice',
            collection: true,
            elementName: 'Voice'
          }, {
            name: 'facsimile',
            collection: true,
            elementName: 'Facsimile'
          }]
      }, {
        localName: 'ServiceProvider',
        propertyInfos: [{
            name: 'providerName',
            elementName: 'ProviderName'
          }, {
            name: 'providerSite',
            elementName: 'ProviderSite',
            typeInfo: '.OnlineResourceType'
          }, {
            name: 'serviceContact',
            elementName: 'ServiceContact',
            typeInfo: '.ResponsiblePartySubsetType'
          }]
      }, {
        localName: 'OnlineResourceType',
        propertyInfos: [{
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'DescriptionType',
        propertyInfos: [{
            name: 'title',
            elementName: 'Title'
          }, {
            name: '_abstract',
            elementName: 'Abstract'
          }, {
            name: 'keywords',
            collection: true,
            elementName: 'Keywords',
            typeInfo: '.KeywordsType'
          }]
      }, {
        localName: 'DomainType',
        propertyInfos: [{
            name: 'value',
            collection: true,
            elementName: 'Value'
          }, {
            name: 'metadata',
            collection: true,
            elementName: 'Metadata',
            typeInfo: '.MetadataType'
          }, {
            name: 'name',
            attributeName: {
              localPart: 'name'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'AcceptVersionsType',
        propertyInfos: [{
            name: 'version',
            collection: true,
            elementName: 'Version'
          }]
      }, {
        localName: 'CapabilitiesBaseType',
        propertyInfos: [{
            name: 'serviceIdentification',
            elementName: 'ServiceIdentification',
            typeInfo: '.ServiceIdentification'
          }, {
            name: 'serviceProvider',
            elementName: 'ServiceProvider',
            typeInfo: '.ServiceProvider'
          }, {
            name: 'operationsMetadata',
            elementName: 'OperationsMetadata',
            typeInfo: '.OperationsMetadata'
          }, {
            name: 'version',
            attributeName: {
              localPart: 'version'
            },
            type: 'attribute'
          }, {
            name: 'updateSequence',
            attributeName: {
              localPart: 'updateSequence'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'KeywordsType',
        propertyInfos: [{
            name: 'keyword',
            collection: true,
            elementName: 'Keyword'
          }, {
            name: 'type',
            elementName: 'Type',
            typeInfo: '.CodeType'
          }]
      }, {
        localName: 'ContactType',
        propertyInfos: [{
            name: 'phone',
            elementName: 'Phone',
            typeInfo: '.TelephoneType'
          }, {
            name: 'address',
            elementName: 'Address',
            typeInfo: '.AddressType'
          }, {
            name: 'onlineResource',
            elementName: 'OnlineResource',
            typeInfo: '.OnlineResourceType'
          }, {
            name: 'hoursOfService',
            elementName: 'HoursOfService'
          }, {
            name: 'contactInstructions',
            elementName: 'ContactInstructions'
          }]
      }, {
        localName: 'OperationsMetadata',
        propertyInfos: [{
            name: 'operation',
            collection: true,
            elementName: 'Operation',
            typeInfo: '.Operation'
          }, {
            name: 'parameter',
            collection: true,
            elementName: 'Parameter',
            typeInfo: '.DomainType'
          }, {
            name: 'constraint',
            collection: true,
            elementName: 'Constraint',
            typeInfo: '.DomainType'
          }, {
            name: 'extendedCapabilities',
            elementName: 'ExtendedCapabilities',
            typeInfo: 'AnyType'
          }]
      }, {
        localName: 'Operation',
        propertyInfos: [{
            name: 'dcp',
            collection: true,
            elementName: 'DCP',
            typeInfo: '.DCP'
          }, {
            name: 'parameter',
            collection: true,
            elementName: 'Parameter',
            typeInfo: '.DomainType'
          }, {
            name: 'constraint',
            collection: true,
            elementName: 'Constraint',
            typeInfo: '.DomainType'
          }, {
            name: 'metadata',
            collection: true,
            elementName: 'Metadata',
            typeInfo: '.MetadataType'
          }, {
            name: 'name',
            attributeName: {
              localPart: 'name'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BoundingBoxType',
        propertyInfos: [{
            name: 'lowerCorner',
            elementName: 'LowerCorner',
            typeInfo: {
              type: 'list',
              baseTypeInfo: 'Double'
            }
          }, {
            name: 'upperCorner',
            elementName: 'UpperCorner',
            typeInfo: {
              type: 'list',
              baseTypeInfo: 'Double'
            }
          }, {
            name: 'crs',
            attributeName: {
              localPart: 'crs'
            },
            type: 'attribute'
          }, {
            name: 'dimensions',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'dimensions'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ExceptionReport',
        propertyInfos: [{
            name: 'exception',
            collection: true,
            elementName: 'Exception',
            typeInfo: '.ExceptionType'
          }, {
            name: 'version',
            attributeName: {
              localPart: 'version'
            },
            type: 'attribute'
          }, {
            name: 'language',
            attributeName: {
              localPart: 'language'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DCP',
        propertyInfos: [{
            name: 'http',
            elementName: 'HTTP',
            typeInfo: '.HTTP'
          }]
      }, {
        localName: 'WGS84BoundingBoxType',
        baseTypeInfo: '.BoundingBoxType'
      }, {
        localName: 'GetCapabilitiesType',
        propertyInfos: [{
            name: 'acceptVersions',
            elementName: 'AcceptVersions',
            typeInfo: '.AcceptVersionsType'
          }, {
            name: 'sections',
            elementName: 'Sections',
            typeInfo: '.SectionsType'
          }, {
            name: 'acceptFormats',
            elementName: 'AcceptFormats',
            typeInfo: '.AcceptFormatsType'
          }, {
            name: 'updateSequence',
            attributeName: {
              localPart: 'updateSequence'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'HTTP',
        propertyInfos: [{
            name: 'getOrPost',
            collection: true,
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: 'Get',
                typeInfo: '.RequestMethodType'
              }, {
                elementName: 'Post',
                typeInfo: '.RequestMethodType'
              }],
            type: 'elementRefs'
          }]
      }, {
        localName: 'RequestMethodType',
        baseTypeInfo: '.OnlineResourceType',
        propertyInfos: [{
            name: 'constraint',
            collection: true,
            elementName: 'Constraint',
            typeInfo: '.DomainType'
          }]
      }, {
        localName: 'AddressType',
        propertyInfos: [{
            name: 'deliveryPoint',
            collection: true,
            elementName: 'DeliveryPoint'
          }, {
            name: 'city',
            elementName: 'City'
          }, {
            name: 'administrativeArea',
            elementName: 'AdministrativeArea'
          }, {
            name: 'postalCode',
            elementName: 'PostalCode'
          }, {
            name: 'country',
            elementName: 'Country'
          }, {
            name: 'electronicMailAddress',
            collection: true,
            elementName: 'ElectronicMailAddress'
          }]
      }, {
        localName: 'AcceptFormatsType',
        propertyInfos: [{
            name: 'outputFormat',
            collection: true,
            elementName: 'OutputFormat'
          }]
      }, {
        localName: 'ResponsiblePartyType',
        propertyInfos: [{
            name: 'individualName',
            elementName: 'IndividualName'
          }, {
            name: 'organisationName',
            elementName: 'OrganisationName'
          }, {
            name: 'positionName',
            elementName: 'PositionName'
          }, {
            name: 'contactInfo',
            elementName: 'ContactInfo',
            typeInfo: '.ContactType'
          }, {
            name: 'role',
            elementName: 'Role',
            typeInfo: '.CodeType'
          }]
      }, {
        localName: 'ResponsiblePartySubsetType',
        propertyInfos: [{
            name: 'individualName',
            elementName: 'IndividualName'
          }, {
            name: 'positionName',
            elementName: 'PositionName'
          }, {
            name: 'contactInfo',
            elementName: 'ContactInfo',
            typeInfo: '.ContactType'
          }, {
            name: 'role',
            elementName: 'Role',
            typeInfo: '.CodeType'
          }]
      }, {
        localName: 'ExceptionType',
        propertyInfos: [{
            name: 'exceptionText',
            collection: true,
            elementName: 'ExceptionText'
          }, {
            name: 'exceptionCode',
            attributeName: {
              localPart: 'exceptionCode'
            },
            type: 'attribute'
          }, {
            name: 'locator',
            attributeName: {
              localPart: 'locator'
            },
            type: 'attribute'
          }]
      }],
    elementInfos: [{
        elementName: 'Keywords',
        typeInfo: '.KeywordsType'
      }, {
        elementName: 'DCP',
        typeInfo: '.DCP'
      }, {
        elementName: 'AccessConstraints'
      }, {
        elementName: 'OperationsMetadata',
        typeInfo: '.OperationsMetadata'
      }, {
        elementName: 'HTTP',
        typeInfo: '.HTTP'
      }, {
        elementName: 'Title'
      }, {
        elementName: 'PointOfContact',
        typeInfo: '.ResponsiblePartyType'
      }, {
        elementName: 'AvailableCRS'
      }, {
        elementName: 'GetCapabilities',
        typeInfo: '.GetCapabilitiesType'
      }, {
        elementName: 'Get',
        typeInfo: '.RequestMethodType',
        scope: '.HTTP'
      }, {
        elementName: 'AbstractMetaData',
        typeInfo: 'AnyType'
      }, {
        elementName: 'IndividualName'
      }, {
        elementName: 'ContactInfo',
        typeInfo: '.ContactType'
      }, {
        elementName: 'ServiceIdentification',
        typeInfo: '.ServiceIdentification'
      }, {
        elementName: 'Role',
        typeInfo: '.CodeType'
      }, {
        elementName: 'Abstract'
      }, {
        elementName: 'ServiceProvider',
        typeInfo: '.ServiceProvider'
      }, {
        elementName: 'ExceptionReport',
        typeInfo: '.ExceptionReport'
      }, {
        elementName: 'OrganisationName'
      }, {
        elementName: 'SupportedCRS',
        substitutionHead: 'AvailableCRS'
      }, {
        elementName: 'Post',
        typeInfo: '.RequestMethodType',
        scope: '.HTTP'
      }, {
        elementName: 'BoundingBox',
        typeInfo: '.BoundingBoxType'
      }, {
        elementName: 'Language'
      }, {
        elementName: 'Operation',
        typeInfo: '.Operation'
      }, {
        elementName: 'PositionName'
      }, {
        elementName: 'Fees'
      }, {
        elementName: 'Metadata',
        typeInfo: '.MetadataType'
      }, {
        elementName: 'Identifier',
        typeInfo: '.CodeType'
      }, {
        elementName: 'Exception',
        typeInfo: '.ExceptionType'
      }, {
        elementName: 'WGS84BoundingBox',
        typeInfo: '.WGS84BoundingBoxType',
        substitutionHead: 'BoundingBox'
      }, {
        elementName: 'ExtendedCapabilities',
        typeInfo: 'AnyType'
      }, {
        elementName: 'OutputFormat'
      }]
  };
  return {
    OWS_1_0_0: OWS_1_0_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], OWS_1_0_0_Module_Factory);
}
else {
  var OWS_1_0_0_Module = OWS_1_0_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.OWS_1_0_0 = OWS_1_0_0_Module.OWS_1_0_0;
  }
  else {
    var OWS_1_0_0 = OWS_1_0_0_Module.OWS_1_0_0;
  }
}