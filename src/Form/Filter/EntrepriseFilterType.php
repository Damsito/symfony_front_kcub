<?php

namespace App\Form\Filter;

use App\DTO\FormFilter\EntrepriseDTOFormFilter;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Contracts\Translation\TranslatorInterface;

class EntrepriseFilterType extends AbstractType
{
    public function __construct(private readonly TranslatorInterface $translator)
    {
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('type', ChoiceType::class, [
                'choices' => [
                    $this->translator->trans('all' ) => '',
                    $this->translator->trans('client', [], 'entreprise') => 'client',
                    $this->translator->trans('partenaire', [], 'entreprise') => 'partenaire',
                    $this->translator->trans('fournisseur', [], 'entreprise') => 'fournisseur',
                ],
                'label' => false,
                'required' => false
            ])
            ->add('recherche', TextType::class, [
                'label' => false,
                'required' => false
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => EntrepriseDTOFormFilter::class
        ]);
    }
}
