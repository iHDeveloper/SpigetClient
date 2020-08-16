import Resource from 'spiget/dist/types/Resource';
import ResourceVersion from 'spiget/dist/types/ResourceVersion';
import Author from 'spiget/dist/types/Author';

export interface ResourceCard {
    resource: Resource;
    version?: ResourceVersion;
    author?: Author;
}
