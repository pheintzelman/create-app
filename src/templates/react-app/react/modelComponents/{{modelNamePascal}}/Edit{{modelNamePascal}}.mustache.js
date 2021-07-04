import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { get{{modelNamePascal}}, update{{modelNamePascal}} } from '../../api/{{modelNameCamel}}';
import { {{modelNamePascal}}Form } from './{{modelNamePascal}}Form';

export function Edit{{modelNamePascal}}() {
  const [{{modelNameCamel}}, set{{modelNamePascal}}] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [processing, setProcessing] = useState(false);

  const history = useHistory();
  const { id: stringId } = useParams();
  const id = parseInt(stringId);

  useEffect(() => {
    get(id);
  }, [id]);

  async function get(id) {
    setIsLoading(true);
    const {{modelNameCamel}} = await get{{modelNamePascal}}(id);
    console.log({ {{modelNameCamel}} });
    set{{modelNamePascal}}({{modelNameCamel}});
    setIsLoading(false);
  }

  async function save({{modelNameCamel}}) {
    setProcessing(true);
    await update{{modelNamePascal}}({{modelNameCamel}});
    setProcessing(false);
    history.push(`/{{modelNameCamel}}/${id}`);
  }

  return (
    <{{modelNamePascal}}Form
      ctaLabel="Save"
      cta={save}
      isLoading={isLoading}
      processing={processing}
      {{modelNameCamel}}={{=<% %>=}}{<%modelNameCamel%>}<%={{ }}=%>
    />
  );
}
