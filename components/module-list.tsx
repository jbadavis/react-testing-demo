import NextLink from 'next/link';
import {Link, OrderedList, ListItem} from '@chakra-ui/react';

type Properties = {
  moduleList: Array<{title: string; href: string}>;
};

/*
 * ModuleList is a component that renders a list of modules.
 *
 * It is an example of a React functional component and a pure function
 * with no side effects.
 */
function ModuleList({moduleList}: Properties) {
  return (
    <OrderedList stylePosition="inside">
      {moduleList.map(({title, href}) => (
        <ListItem key={title}>
          <NextLink href={href}>
            <Link as="span" bg="gray.200">
              {title}
            </Link>
            .
          </NextLink>
        </ListItem>
      ))}
    </OrderedList>
  );
}

export default ModuleList;
