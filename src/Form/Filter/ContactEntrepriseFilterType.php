<?php

namespace App\Form\Filter;

use App\DTO\FormFilter\ContactEntrepriseDTOFormFilter;
use App\DTO\FormFilter\EntrepriseDTOFormFilter;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Contracts\Translation\TranslatorInterface;

class ContactEntrepriseFilterType extends AbstractType
{
    public function __construct(private readonly TranslatorInterface $translator)
    {
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('sort', HiddenType::class, [
                'label' => false,
                'required' => false
            ])
            ->add('recherche', TextType::class, [
                'required' => false,
                'label' => false,
                'attr' => [
                    'placeholder' => $this->translator->trans('rechercher')
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ContactEntrepriseDTOFormFilter::class
        ]);
    }
}
